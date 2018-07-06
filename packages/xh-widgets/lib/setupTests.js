'use strict';

var _enzyme = require('enzyme');

var enzyme = _interopRequireWildcard(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var Adapter = _interopRequireWildcard(_enzymeAdapterReact);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

enzyme.configure({ adapter: new Adapter() });