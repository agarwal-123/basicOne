import React, { useState, useEffect } from 'react';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

import { connect } from 'react-redux';
import { showUser, updateUserDetails } from '../../../redux/action/user';
import { useRouter } from 'next/router';
import Loader from '../../Loader';

function index({ showUser, userData, updateUserDetails, ...props }) {
  const { children } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = cookies.get('token_id');
    if (token) {
      showUser();
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (!userData.isLoading && userData.error) {
      router.push('/');
    }
    if (!userData.error) {
      const response = userData?.data?.data;
      if (response) {
        if (response.exist) {
          setLoading(false);
          const userInfo = userData?.data?.data?.user?.userInfo;
          updateUserDetails({
            userId: userInfo.userId,
            isLoggedIn: true,
            phoneNo: userInfo.phoneNo,
            grade: userInfo.grade,
          });
        } else {
          cookies.remove('token_id', {
            path: '/',
          });
          router.push('/');
        }
      }
    } else {
      router.push('/');
    }
  }, [userData]);

  if (loading) {
    return <Loader />;
  } else return <>{children}</>;
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.getUserData,
  };
};

export default connect(mapStateToProps, { showUser, updateUserDetails })(index);
