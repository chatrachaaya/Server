'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvers = undefined;

var _place = require('./models/place');

var _place2 = _interopRequireDefault(_place);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = exports.resolvers = {
    Query: {
        allPlaces: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _place2.default.find();

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function allPlaces() {
                return _ref.apply(this, arguments);
            }

            return allPlaces;
        }(),
        getPlace: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(root, _ref2) {
                var _id = _ref2._id;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _place2.default.findById(_id);

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getPlace(_x, _x2) {
                return _ref3.apply(this, arguments);
            }

            return getPlace;
        }()
    },
    Mutation: {
        createPlace: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(root, _ref4) {
                var input = _ref4.input;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _place2.default.create(input);

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function createPlace(_x3, _x4) {
                return _ref5.apply(this, arguments);
            }

            return createPlace;
        }(),
        updatePlace: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(root, _ref6) {
                var _id = _ref6._id,
                    input = _ref6.input;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _place2.default.findOneAndUpdate({ _id: _id }, input, { new: true });

                            case 2:
                                return _context4.abrupt('return', _context4.sent);

                            case 3:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function updatePlace(_x5, _x6) {
                return _ref7.apply(this, arguments);
            }

            return updatePlace;
        }(),
        deletePlace: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(root, _ref8) {
                var _id = _ref8._id;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _place2.default.findByIdAndDelete(_id);

                            case 2:
                                return _context5.abrupt('return', _context5.sent);

                            case 3:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function deletePlace(_x7, _x8) {
                return _ref9.apply(this, arguments);
            }

            return deletePlace;
        }()
    }
};