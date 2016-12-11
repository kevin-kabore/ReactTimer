var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')


var Clock = require('Clock') // Clock component

//All tests for Clock
describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist()
  });

//All tests for render method
  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>)
      var $el = $(ReactDOM.findDOMNode(clock))
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    })
  });

  describe('formatSeconds', () =>{
    it('should format seconds', () =>{
      var clock = TestUtils.renderIntoDocument(<Clock/>) //Load Component
      var seconds = 615
      var expected = '10:15'
      var actual = clock.formatSeconds(seconds); //call function from Clock component loaded in clock variable

      expect(actual).toBe(expected)
    });

//Edge cases
    it('should format seconds when mins/secs are less than 10', () =>{
      var clock = TestUtils.renderIntoDocument(<Clock/>)
      var seconds = 61
      var expected = '01:01'
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected)
    })
  })
})
