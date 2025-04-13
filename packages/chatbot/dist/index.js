import ne, { useState as Y, useCallback as oe } from "react";
var I = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function ie() {
  if (V) return x;
  V = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function i(l, a, u) {
    var n = null;
    if (u !== void 0 && (n = "" + u), a.key !== void 0 && (n = "" + a.key), "key" in a) {
      u = {};
      for (var p in a)
        p !== "key" && (u[p] = a[p]);
    } else u = a;
    return a = u.ref, {
      $$typeof: o,
      type: l,
      key: n,
      ref: a !== void 0 ? a : null,
      props: u
    };
  }
  return x.Fragment = c, x.jsx = i, x.jsxs = i, x;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ce() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case X:
          return "Profiler";
        case J:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case h:
            return "Portal";
          case H:
            return (e.displayName || "Context") + ".Provider";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case M:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function i(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var s = r.error, _ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), c(e);
      }
    }
    function l(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function n(e) {
      if (D.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function s() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function S() {
      var e = o(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function N(e, r, s, _, g, d, A, C) {
      return s = d.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: d,
        _owner: g
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: S
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, s, _, g, d, A, C) {
      var m = r.children;
      if (m !== void 0)
        if (_)
          if (ae(m)) {
            for (_ = 0; _ < m.length; _++)
              T(m[_]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(m);
      if (D.call(r, "key")) {
        m = o(e);
        var v = Object.keys(r).filter(function(se) {
          return se !== "key";
        });
        _ = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", z[m + _] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          m,
          v,
          m
        ), z[m + _] = !0);
      }
      if (m = null, s !== void 0 && (i(s), m = "" + s), n(r) && (i(r.key), m = "" + r.key), "key" in r) {
        s = {};
        for (var $ in r)
          $ !== "key" && (s[$] = r[$]);
      } else s = r;
      return m && p(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(
        e,
        m,
        d,
        g,
        a(),
        s,
        A,
        C
      );
    }
    function T(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var b = ne, j = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), H = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), w = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, ae = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var F, L = {}, U = b["react-stack-bottom-frame"].bind(
      b,
      u
    )(), W = P(l(u)), z = {};
    R.Fragment = O, R.jsx = function(e, r, s, _, g) {
      var d = 1e4 > w.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        s,
        !1,
        _,
        g,
        d ? Error("react-stack-top-frame") : U,
        d ? P(l(e)) : W
      );
    }, R.jsxs = function(e, r, s, _, g) {
      var d = 1e4 > w.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        s,
        !0,
        _,
        g,
        d ? Error("react-stack-top-frame") : U,
        d ? P(l(e)) : W
      );
    };
  }()), R;
}
process.env.NODE_ENV === "production" ? I.exports = ie() : I.exports = ce();
var t = I.exports;
const le = "_header_11n19_1", ue = "_header__avatar_11n19_9", _e = "_header__title_11n19_20", k = {
  header: le,
  "header__avatar-container": "_header__avatar-container_11n19_9",
  header__avatar: ue,
  header__title: _e
}, me = ({
  botName: o = "Chatbot",
  botAvatar: c
}) => /* @__PURE__ */ t.jsxs("div", { className: k.header, children: [
  c && /* @__PURE__ */ t.jsx("div", { className: k["header__avatar-container"], children: /* @__PURE__ */ t.jsx("img", { src: c, alt: `${o} avatar`, className: k.header__avatar }) }),
  /* @__PURE__ */ t.jsx("h2", { className: k.header__title, children: o })
] }), f = {
  "message-item": "_message-item_ibhck_1",
  "message-item--bot": "_message-item--bot_ibhck_7",
  "message-item--user": "_message-item--user_ibhck_11",
  "message-item__avatar": "_message-item__avatar_ibhck_16",
  "message-item__content": "_message-item__content_ibhck_29",
  "message-item__sender": "_message-item__sender_ibhck_45",
  "message-item__text": "_message-item__text_ibhck_51",
  "message-item__timestamp": "_message-item__timestamp_ibhck_55"
}, de = ({
  message: o,
  botName: c = "Bot",
  botAvatar: i,
  userAvatar: l
}) => {
  const a = o.sender === "bot";
  return /* @__PURE__ */ t.jsxs("div", { className: `${f["message-item"]} ${a ? f["message-item--bot"] : f["message-item--user"]}`, children: [
    a && i && /* @__PURE__ */ t.jsx("div", { className: f["message-item__avatar"], children: /* @__PURE__ */ t.jsx("img", { src: i, alt: `${c} avatar` }) }),
    !a && l && /* @__PURE__ */ t.jsx("div", { className: f["message-item__avatar"], children: /* @__PURE__ */ t.jsx("img", { src: l, alt: "User avatar" }) }),
    /* @__PURE__ */ t.jsxs("div", { className: f["message-item__content"], children: [
      a && /* @__PURE__ */ t.jsx("div", { className: f["message-item__sender"], children: c }),
      /* @__PURE__ */ t.jsx("div", { className: f["message-item__text"], children: o.content }),
      /* @__PURE__ */ t.jsx("div", { className: f["message-item__timestamp"], children: o.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
    ] })
  ] });
}, G = {
  "message-list": "_message-list_b12ht_1",
  "message-list__empty-state": "_message-list__empty-state_b12ht_10"
}, fe = ({
  messages: o,
  botName: c,
  botAvatar: i,
  userAvatar: l
}) => /* @__PURE__ */ t.jsx("div", { className: G["message-list"], children: o.length === 0 ? /* @__PURE__ */ t.jsx("div", { className: G["message-list__empty-state"], children: "No messages yet. Start a conversation!" }) : o.map((a) => /* @__PURE__ */ t.jsx(
  de,
  {
    message: a,
    botName: c,
    botAvatar: i,
    userAvatar: l
  },
  a.id
)) }), y = {
  "input-area": "_input-area_1aom8_1",
  "input-area__input": "_input-area__input_1aom8_8",
  "input-area__button": "_input-area__button_1aom8_24",
  "input-area__loading": "_input-area__loading_1aom8_42"
}, be = ({
  onSendMessage: o,
  placeholder: c = "Type a message...",
  isLoading: i = !1
}) => {
  const [l, a] = Y(""), u = (n) => {
    n.preventDefault(), l.trim() && !i && (o(l), a(""));
  };
  return /* @__PURE__ */ t.jsxs("form", { className: y["input-area"], onSubmit: u, children: [
    /* @__PURE__ */ t.jsx(
      "input",
      {
        type: "text",
        value: l,
        onChange: (n) => a(n.target.value),
        placeholder: c,
        disabled: i,
        className: y["input-area__input"],
        "aria-label": "Message input"
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "submit",
        disabled: i || !l.trim(),
        className: y["input-area__button"],
        "aria-label": "Send message",
        children: i ? /* @__PURE__ */ t.jsx("span", { className: y["input-area__loading"], children: "..." }) : /* @__PURE__ */ t.jsx("span", { children: "Send" })
      }
    )
  ] });
}, ge = {
  "chat-container": "_chat-container_1hxk8_8"
}, ve = ({
  initialMessages: o = [],
  botName: c = "Chatbot",
  botAvatar: i,
  userAvatar: l,
  placeholder: a = "Type a message...",
  onSendMessage: u,
  theme: n
}) => {
  const [p, S] = Y(o), [N, E] = Y(!1), T = oe(async (b) => {
    if (!b.trim()) return;
    const j = {
      id: Date.now().toString(),
      content: b,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    if (S((h) => [...h, j]), u) {
      E(!0);
      try {
        await u(b);
      } catch (h) {
        console.error("Error sending message:", h);
      } finally {
        E(!1);
      }
    }
  }, [u]);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: ge["chat-container"],
      style: {
        "--primary-color": n == null ? void 0 : n.primaryColor,
        "--background-color": n == null ? void 0 : n.backgroundColor,
        "--text-color": n == null ? void 0 : n.textColor,
        "--font-family": n == null ? void 0 : n.fontFamily
      },
      children: [
        /* @__PURE__ */ t.jsx(me, { botName: c, botAvatar: i }),
        /* @__PURE__ */ t.jsx(
          fe,
          {
            messages: p,
            botName: c,
            botAvatar: i,
            userAvatar: l
          }
        ),
        /* @__PURE__ */ t.jsx(
          be,
          {
            onSendMessage: T,
            placeholder: a,
            isLoading: N
          }
        )
      ]
    }
  );
};
export {
  ve as ChatContainer,
  ve as default
};
