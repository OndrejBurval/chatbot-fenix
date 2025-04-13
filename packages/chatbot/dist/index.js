import oe, { useState as A, useCallback as C, useMemo as ie } from "react";
var $ = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function ce() {
  if (z) return E;
  z = 1;
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function n(c, a, l) {
    var m = null;
    if (l !== void 0 && (m = "" + l), a.key !== void 0 && (m = "" + a.key), "key" in a) {
      l = {};
      for (var d in a)
        d !== "key" && (l[d] = a[d]);
    } else l = a;
    return a = l.ref, {
      $$typeof: r,
      type: c,
      key: m,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return E.Fragment = s, E.jsx = n, E.jsxs = n, E;
}
var x = {};
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
function le() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ae ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case B:
          return "Profiler";
        case X:
          return "StrictMode";
        case K:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case M:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function n(e) {
      try {
        s(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var i = t.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), s(e);
      }
    }
    function c(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (D.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, t) {
      function i() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function h() {
      var e = r(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function b(e, t, i, u, g, f, O, w) {
      return i = f.ref, e = {
        $$typeof: Y,
        type: e,
        key: t,
        props: f,
        _owner: g
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
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
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, t, i, u, g, f, O, w) {
      var _ = t.children;
      if (_ !== void 0)
        if (u)
          if (se(_)) {
            for (u = 0; u < _.length; u++)
              I(_[u]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I(_);
      if (D.call(t, "key")) {
        _ = r(e);
        var v = Object.keys(t).filter(function(ne) {
          return ne !== "key";
        });
        u = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", V[_ + u] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          _,
          v,
          _
        ), V[_ + u] = !0);
      }
      if (_ = null, i !== void 0 && (n(i), _ = "" + i), m(t) && (n(t.key), _ = "" + t.key), "key" in t) {
        i = {};
        for (var P in t)
          P !== "key" && (i[P] = t[P]);
      } else i = t;
      return _ && d(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), b(
        e,
        _,
        f,
        g,
        a(),
        i,
        O,
        w
      );
    }
    function I(e) {
      typeof e == "object" && e !== null && e.$$typeof === Y && e._store && (e._store.validated = 1);
    }
    var T = oe, Y = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), S = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, se = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var F, L = {}, U = T["react-stack-bottom-frame"].bind(
      T,
      l
    )(), W = N(c(l)), V = {};
    x.Fragment = y, x.jsx = function(e, t, i, u, g) {
      var f = 1e4 > S.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        i,
        !1,
        u,
        g,
        f ? Error("react-stack-top-frame") : U,
        f ? N(c(e)) : W
      );
    }, x.jsxs = function(e, t, i, u, g) {
      var f = 1e4 > S.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        i,
        !0,
        u,
        g,
        f ? Error("react-stack-top-frame") : U,
        f ? N(c(e)) : W
      );
    };
  }()), x;
}
process.env.NODE_ENV === "production" ? $.exports = ce() : $.exports = le();
var o = $.exports;
const ue = "_header_11n19_1", _e = "_header__avatar_11n19_9", me = "_header__title_11n19_20", j = {
  header: ue,
  "header__avatar-container": "_header__avatar-container_11n19_9",
  header__avatar: _e,
  header__title: me
}, de = ({
  botName: r = "Chatbot",
  botAvatar: s
}) => /* @__PURE__ */ o.jsxs("div", { className: j.header, children: [
  s && /* @__PURE__ */ o.jsx("div", { className: j["header__avatar-container"], children: /* @__PURE__ */ o.jsx("img", { src: s, alt: `${r} avatar`, className: j.header__avatar }) }),
  /* @__PURE__ */ o.jsx("h2", { className: j.header__title, children: r })
] }), p = {
  "message-item": "_message-item_ibhck_1",
  "message-item--bot": "_message-item--bot_ibhck_7",
  "message-item--user": "_message-item--user_ibhck_11",
  "message-item__avatar": "_message-item__avatar_ibhck_16",
  "message-item__content": "_message-item__content_ibhck_29",
  "message-item__sender": "_message-item__sender_ibhck_45",
  "message-item__text": "_message-item__text_ibhck_51",
  "message-item__timestamp": "_message-item__timestamp_ibhck_55"
}, fe = ({
  message: r,
  botName: s = "Bot",
  botAvatar: n,
  userAvatar: c
}) => {
  const a = r.sender === "bot";
  return /* @__PURE__ */ o.jsxs("div", { className: `${p["message-item"]} ${a ? p["message-item--bot"] : p["message-item--user"]}`, children: [
    a && n && /* @__PURE__ */ o.jsx("div", { className: p["message-item__avatar"], children: /* @__PURE__ */ o.jsx("img", { src: n, alt: `${s} avatar` }) }),
    !a && c && /* @__PURE__ */ o.jsx("div", { className: p["message-item__avatar"], children: /* @__PURE__ */ o.jsx("img", { src: c, alt: "User avatar" }) }),
    /* @__PURE__ */ o.jsxs("div", { className: p["message-item__content"], children: [
      a && /* @__PURE__ */ o.jsx("div", { className: p["message-item__sender"], children: s }),
      /* @__PURE__ */ o.jsx("div", { className: p["message-item__text"], children: r.content }),
      /* @__PURE__ */ o.jsx("div", { className: p["message-item__timestamp"], children: r.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
    ] })
  ] });
}, G = {
  "message-list": "_message-list_b12ht_1",
  "message-list__empty-state": "_message-list__empty-state_b12ht_10"
}, pe = ({
  messages: r,
  botName: s,
  botAvatar: n,
  userAvatar: c
}) => /* @__PURE__ */ o.jsx("div", { className: G["message-list"], children: r.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: G["message-list__empty-state"], children: "No messages yet. Start a conversation!" }) : r.map((a) => /* @__PURE__ */ o.jsx(
  fe,
  {
    message: a,
    botName: s,
    botAvatar: n,
    userAvatar: c
  },
  a.id
)) }), ge = ({
  initialMessages: r = [],
  onSendMessage: s
}) => {
  const [n, c] = A(r), [a, l] = A(!1), m = C(async (d) => {
    if (!d.trim()) return;
    const h = {
      id: Date.now().toString(),
      content: d,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    if (c((b) => [...b, h]), s) {
      l(!0);
      try {
        await s(d);
      } catch (b) {
        console.error("Error sending message:", b);
      } finally {
        l(!1);
      }
    }
  }, [s]);
  return {
    messages: n,
    isLoading: a,
    handleSendMessage: m
  };
}, be = ({ onSubmit: r, isLoading: s = !1 }) => {
  const [n, c] = A(""), a = C((m) => {
    c(m.target.value);
  }, []), l = C((m) => {
    m.preventDefault(), n.trim() && !s && (r(n), c(""));
  }, [n, s, r]);
  return {
    inputValue: n,
    handleInputChange: a,
    handleSubmit: l
  };
}, ve = (r) => ie(() => ({
  "--primary-color": r == null ? void 0 : r.primaryColor,
  "--background-color": r == null ? void 0 : r.backgroundColor,
  "--text-color": r == null ? void 0 : r.textColor,
  "--font-family": r == null ? void 0 : r.fontFamily
}), [r]), k = {
  "input-area": "_input-area_1aom8_1",
  "input-area__input": "_input-area__input_1aom8_8",
  "input-area__button": "_input-area__button_1aom8_24",
  "input-area__loading": "_input-area__loading_1aom8_42"
}, he = ({
  onSendMessage: r,
  placeholder: s = "Type a message...",
  isLoading: n = !1
}) => {
  const { inputValue: c, handleInputChange: a, handleSubmit: l } = be({
    onSubmit: r,
    isLoading: n
  });
  return /* @__PURE__ */ o.jsxs("form", { className: k["input-area"], onSubmit: l, children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "text",
        value: c,
        onChange: a,
        placeholder: s,
        disabled: n,
        className: k["input-area__input"],
        "aria-label": "Message input"
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "submit",
        disabled: n || !c.trim(),
        className: k["input-area__button"],
        "aria-label": "Send message",
        children: n ? /* @__PURE__ */ o.jsx("span", { className: k["input-area__loading"], children: "..." }) : /* @__PURE__ */ o.jsx("span", { children: "Send" })
      }
    )
  ] });
}, Ee = {
  "chat-container": "_chat-container_1hxk8_8"
}, Re = ({
  initialMessages: r = [],
  botName: s = "Chatbot",
  botAvatar: n,
  userAvatar: c,
  placeholder: a = "Type a message...",
  onSendMessage: l,
  theme: m
}) => {
  const { messages: d, isLoading: h, handleSendMessage: b } = ge({
    initialMessages: r,
    onSendMessage: l
  }), R = ve(m);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: Ee["chat-container"],
      style: R,
      children: [
        /* @__PURE__ */ o.jsx(de, { botName: s, botAvatar: n }),
        /* @__PURE__ */ o.jsx(
          pe,
          {
            messages: d,
            botName: s,
            botAvatar: n,
            userAvatar: c
          }
        ),
        /* @__PURE__ */ o.jsx(
          he,
          {
            onSendMessage: b,
            placeholder: a,
            isLoading: h
          }
        )
      ]
    }
  );
};
export {
  Re as ChatContainer,
  Re as default,
  be as useInput,
  ge as useMessages,
  ve as useTheme
};
