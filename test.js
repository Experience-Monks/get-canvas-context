var getContext = require('./')
var test = require('tape')

test('gets canvas context by name', function(t) {
  t.throws(getContext, 'needs type name')
  t.ok(getContext('2d') instanceof CanvasRenderingContext2D, 'is 2d')
  t.ok(getContext('webgl') instanceof WebGLRenderingContext, 'is webgl')

  var canvas = getContext('2d', { width: 500, height: 2 }).canvas
  t.deepEqual([ canvas.width, canvas.height ], [ 500, 2 ], 'sets size') 
  t.equal(getContext('webgl999'), null, 'returns null on bogus context')
  t.equal(getContext('webgl', { preserveDrawingBuffer: true }).getContextAttributes().preserveDrawingBuffer, 
    true, 'sets context attributes')
  t.end()

  if (window.close)
    window.close()
})