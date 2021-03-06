import React, { Component } from 'react';
import { questions } from '../../../shared/questions';

import Radio from '@material-ui/core/Radio';
import Wrapper from './style';

import Link from 'next/link';

var correct = 0,
  total = 0,
  skip = 0;

export class Testform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      activeButton: '0',
      attempt: 0,
      curshow: 0,
      isfinish: 0,
      attempted: [],
    };
    this.continue = this.continue.bind(this);
    this.submit = this.submit.bind(this);
    this.skip = this.skip.bind(this);
    this.setthis = this.setthis.bind(this);
    this.setthis2 = this.setthis2.bind(this);
    this.check = this.check.bind(this);
  }

  continue() {
    this.setState({
      curshow: 0,
      attempt: 0,
      activeButton: '0',
    });

    if (questions.length - 1 === this.state.i) {
      this.setState({ isfinish: 1 });
    } else {
      this.setState({
        i: this.state.i + 1,
      });
    }
  }

  skip() {
    skip++;
    if (questions.length - 1 === this.state.i) {
      this.setState({ isfinish: 1 });
    } else {
      this.setState({
        i: this.state.i + 1,
        activeButton: '0',
      });
    }
  }

  check() {
    if (
      this.state.activeButton == 1 &&
      questions[this.state.i].op1 === questions[this.state.i].ans
    )
      return true;
    else if (
      this.state.activeButton == 2 &&
      questions[this.state.i].op2 === questions[this.state.i].ans
    )
      return true;
    else if (
      this.state.activeButton == 3 &&
      questions[this.state.i].op3 === questions[this.state.i].ans
    )
      return true;
    else if (
      this.state.activeButton == 4 &&
      questions[this.state.i].op4 === questions[this.state.i].ans
    )
      return true;
    else return false;
  }

  submit() {
    if (this.state.activeButton === '0') {
      alert('Choose one of the option');
    } else {
      var obj = {
        id: questions[this.state.i].id,
        ac: this.check(),
      };
      if (obj.ac) correct++;
      total++;
      this.state.attempted.push(obj);

      this.setState({
        curshow: 1,
        attempt: 1,
      });
    }
  }

  setthis(event) {
    if (!this.state.curshow) {
      this.setState({
        activeButton: event.target.value,
      });
    }
  }

  setthis2(val) {
    if (!this.state.curshow) {
      this.setState({
        activeButton: val,
      });
    }
  }

  render() {
    if (this.state.isfinish) {
      return (
        <Wrapper>
          <div className='test-wrapper'>
            <div className='test-container-s'>
              <h1 className='test-title'>Performance Card</h1>
              <h3 className='test-result'>
                No of attempted question - {total}{' '}
              </h3>
              <h3 className='test-result'>No of right attempt - {correct}</h3>
              <h3 className='test-result'>
                No of wrong attempt - {total - correct}
              </h3>
              <h3 className='test-result'>No of skip - {skip}</h3>
              <Link href='/test'>
                <button className='test-finish'>Finish</button>
              </Link>
            </div>
          </div>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <div className='test-wrapper'>
            <div className='test-container'>
              <div className='test-question'>
                <h3>
                  {this.state.i + 1}. {questions[this.state.i].question}
                </h3>
              </div>

              <div className='test-option'>
                <div
                  onClick={() => this.setthis2('1')}
                  className='test-check'
                >
                  <div className='test-radio'>
                    <Radio
                      checked={this.state.activeButton === '1'}
                      onChange={this.setthis}
                      value='1'
                      name='radio-button-demo'
                      inputProps={{ 'aria-label': 'A' }}
                    />
                  </div>
                  <div className='test-h3'>
                    <h3>{questions[this.state.i].op1}</h3>
                  </div>
                </div>
              </div>

              <div className='test-option'>
                <div
                  onClick={() => this.setthis2('2')}
                  className='test-check'
                >
                  <div className='test-radio'>
                    <Radio
                      checked={this.state.activeButton === '2'}
                      onChange={this.setthis}
                      value='2'
                      name='radio-button-demo'
                      inputProps={{ 'aria-label': 'A' }}
                    />
                  </div>
                  <div className='test-h3'>
                    <h3>{questions[this.state.i].op2}</h3>
                  </div>
                </div>
              </div>

              <div className='test-option'>
                <div
                  onClick={() => this.setthis2('3')}
                  className='test-check'
                >
                  <div className='test-radio'>
                    <Radio
                      checked={this.state.activeButton === '3'}
                      onChange={this.setthis}
                      value='3'
                      name='radio-button-demo'
                      inputProps={{ 'aria-label': 'A' }}
                    />
                  </div>
                  <div className='test-h3'>
                    <h3>{questions[this.state.i].op3}</h3>
                  </div>
                </div>
              </div>

              <div className='test-option'>
                <div
                  onClick={() => this.setthis2('4')}
                  className='test-check'
                >
                  <div className='test-radio'>
                    <Radio
                      checked={this.state.activeButton === '4'}
                      onChange={this.setthis}
                      value='4'
                      name='radio-button-demo'
                      inputProps={{ 'aria-label': 'A' }}
                    />
                  </div>
                  <div className='test-h3'>
                    <h3>{questions[this.state.i].op4}</h3>
                  </div>
                </div>
              </div>

              {!this.state.attempt ? (
                <div className='test-btn-container'>
                  <button
                    className='test-btn-skip'
                    onClick={() => {
                      this.skip();
                    }}
                  >
                    <h3>Skip</h3>
                  </button>
                  <button
                    className='test-btn-submit'
                    onClick={() => {
                      this.submit();
                    }}
                  >
                    <h3>Submit</h3>
                  </button>
                </div>
              ) : (
                <div className='test-btn-container'>
                  <button
                    className='test-btn-continue'
                    onClick={() => {
                      this.continue();
                    }}
                  >
                    <h3>Continue</h3>
                  </button>
                </div>
              )}
            </div>

            {this.state.curshow ? (
              <div className='test-answer'>
                <h3>{questions[this.state.i].ans}</h3>
                <br />
                <h3>{questions[this.state.i].note}</h3>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </Wrapper>
      );
    }
  }
}

export default Testform;
