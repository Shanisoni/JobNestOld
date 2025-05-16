import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  _extends
} from "./chunk-DPIODVWW.js";
import "./chunk-QT63QQJV.js";
import {
  require_react
} from "./chunk-RLJ2RCJQ.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $b73a6c6685e72184$var$NAME = "Label";
var $b73a6c6685e72184$export$b04be29aa201d4f5 = (0, import_react.forwardRef)((props, forwardedRef) => {
  return (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
    }
  }));
});
Object.assign($b73a6c6685e72184$export$b04be29aa201d4f5, {
  displayName: $b73a6c6685e72184$var$NAME
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;
export {
  $b73a6c6685e72184$export$b04be29aa201d4f5 as Label,
  $b73a6c6685e72184$export$be92b6f5f03c0fe9 as Root
};
//# sourceMappingURL=@radix-ui_react-label.js.map
