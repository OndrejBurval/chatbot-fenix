import oe, { useState as j, useCallback as N, useMemo as ie } from "react";
var M = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function ce() {
  if (G) return T;
  G = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function n(i, s, l) {
    var m = null;
    if (l !== void 0 && (m = "" + l), s.key !== void 0 && (m = "" + s.key), "key" in s) {
      l = {};
      for (var f in s)
        f !== "key" && (l[f] = s[f]);
    } else l = s;
    return s = l.ref, {
      $$typeof: r,
      type: i,
      key: m,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return T.Fragment = a, T.jsx = n, T.jsxs = n, T;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function le() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ae ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
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
          case Y:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function n(e) {
      try {
        a(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var c = t.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), a(e);
      }
    }
    function i(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = P.A;
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
    function f(e, t) {
      function c() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function E() {
      var e = r(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, t, c, u, h, g, C, $) {
      return c = g.ref, e = {
        $$typeof: y,
        type: e,
        key: t,
        props: g,
        _owner: h
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
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
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function v(e, t, c, u, h, g, C, $) {
      var _ = t.children;
      if (_ !== void 0)
        if (u)
          if (se(_)) {
            for (u = 0; u < _.length; u++)
              p(_[u]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(_);
      if (D.call(t, "key")) {
        _ = r(e);
        var x = Object.keys(t).filter(function(ne) {
          return ne !== "key";
        });
        u = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", V[_ + u] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          _,
          x,
          _
        ), V[_ + u] = !0);
      }
      if (_ = null, c !== void 0 && (n(c), _ = "" + c), m(t) && (n(t.key), _ = "" + t.key), "key" in t) {
        c = {};
        for (var I in t)
          I !== "key" && (c[I] = t[I]);
      } else c = t;
      return _ && f(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(
        e,
        _,
        g,
        h,
        s(),
        c,
        C,
        $
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === y && e._store && (e._store.validated = 1);
    }
    var R = oe, y = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), P = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, se = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var F, L = {}, U = R["react-stack-bottom-frame"].bind(
      R,
      l
    )(), W = A(i(l)), V = {};
    S.Fragment = O, S.jsx = function(e, t, c, u, h) {
      var g = 1e4 > P.recentlyCreatedOwnerStacks++;
      return v(
        e,
        t,
        c,
        !1,
        u,
        h,
        g ? Error("react-stack-top-frame") : U,
        g ? A(i(e)) : W
      );
    }, S.jsxs = function(e, t, c, u, h) {
      var g = 1e4 > P.recentlyCreatedOwnerStacks++;
      return v(
        e,
        t,
        c,
        !0,
        u,
        h,
        g ? Error("react-stack-top-frame") : U,
        g ? A(i(e)) : W
      );
    };
  }()), S;
}
process.env.NODE_ENV === "production" ? M.exports = ce() : M.exports = le();
var o = M.exports;
const ue = "_header_11n19_1", _e = "_header__avatar_11n19_9", me = "_header__title_11n19_20", k = {
  header: ue,
  "header__avatar-container": "_header__avatar-container_11n19_9",
  header__avatar: _e,
  header__title: me
}, de = ({
  botName: r = "Chatbot",
  botAvatar: a
}) => /* @__PURE__ */ o.jsxs("div", { className: k.header, children: [
  a && /* @__PURE__ */ o.jsx("div", { className: k["header__avatar-container"], children: /* @__PURE__ */ o.jsx("img", { src: a, alt: `${r} avatar`, className: k.header__avatar }) }),
  /* @__PURE__ */ o.jsx("h2", { className: k.header__title, children: r })
] }), b = {
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
  botName: a = "Bot",
  botAvatar: n,
  userAvatar: i
}) => {
  const s = r.sender === "bot";
  return /* @__PURE__ */ o.jsxs("div", { className: `${b["message-item"]} ${s ? b["message-item--bot"] : b["message-item--user"]}`, children: [
    s && n && /* @__PURE__ */ o.jsx("div", { className: b["message-item__avatar"], children: /* @__PURE__ */ o.jsx("img", { src: n, alt: `${a} avatar` }) }),
    !s && i && /* @__PURE__ */ o.jsx("div", { className: b["message-item__avatar"], children: /* @__PURE__ */ o.jsx("img", { src: i, alt: "User avatar" }) }),
    /* @__PURE__ */ o.jsxs("div", { className: b["message-item__content"], children: [
      s && /* @__PURE__ */ o.jsx("div", { className: b["message-item__sender"], children: a }),
      /* @__PURE__ */ o.jsx("div", { className: b["message-item__text"], children: r.content }),
      /* @__PURE__ */ o.jsx("div", { className: b["message-item__timestamp"], children: r.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
    ] })
  ] });
}, q = {
  "message-list": "_message-list_b12ht_1",
  "message-list__empty-state": "_message-list__empty-state_b12ht_10"
}, pe = ({
  messages: r,
  botName: a,
  botAvatar: n,
  userAvatar: i
}) => /* @__PURE__ */ o.jsx("div", { className: q["message-list"], children: r.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: q["message-list__empty-state"], children: "No messages yet. Start a conversation!" }) : r.map((s) => /* @__PURE__ */ o.jsx(
  fe,
  {
    message: s,
    botName: a,
    botAvatar: n,
    userAvatar: i
  },
  s.id
)) }), xe = ({
  initialMessages: r = [],
  onSendMessage: a
}) => {
  const [n, i] = j(r), [s, l] = j(!1), m = N(async (f) => {
    if (!f.trim()) return;
    const E = {
      id: Date.now().toString(),
      content: f,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    if (i((d) => [...d, E]), a) {
      l(!0);
      try {
        await a(f);
      } catch (d) {
        console.error("Error sending message:", d);
      } finally {
        l(!1);
      }
    }
  }, [a]);
  return {
    messages: n,
    isLoading: s,
    handleSendMessage: m
  };
}, ge = ({ onSubmit: r, isLoading: a = !1 }) => {
  const [n, i] = j(""), s = N((m) => {
    i(m.target.value);
  }, []), l = N((m) => {
    m.preventDefault(), n.trim() && !a && (r(n), i(""));
  }, [n, a, r]);
  return {
    inputValue: n,
    handleInputChange: s,
    handleSubmit: l
  };
}, be = (r) => ie(() => ({
  "--primary-color": r == null ? void 0 : r.primaryColor,
  "--background-color": r == null ? void 0 : r.backgroundColor,
  "--text-color": r == null ? void 0 : r.textColor,
  "--font-family": r == null ? void 0 : r.fontFamily
}), [r]), ve = ({
  initialMessages: r = [],
  callbacks: a = {}
}) => {
  const [n, i] = j(r), [s, l] = j(!1), m = async (d) => (await new Promise((v) => setTimeout(v, 1e3)), `You said: "${d}". This is a default response as no custom response generator was provided.`), f = a.generateResponse || m, E = N(async (d) => {
    if (!d.trim()) return;
    const v = {
      id: `user-${Date.now()}`,
      content: d,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    i((p) => [...p, v]), a.onSendStart && a.onSendStart(), l(!0);
    try {
      const p = await f(d), R = {
        id: `bot-${Date.now()}`,
        content: p,
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      i((y) => [...y, R]), a.onSendSuccess && a.onSendSuccess(d, p);
    } catch (p) {
      console.error("Error generating response:", p), a.onSendError && a.onSendError(d, p);
    } finally {
      l(!1);
    }
  }, [a, f]);
  return {
    messages: n,
    isLoading: s,
    sendMessage: E
  };
}, w = {
  "input-area": "_input-area_1aom8_1",
  "input-area__input": "_input-area__input_1aom8_8",
  "input-area__button": "_input-area__button_1aom8_24",
  "input-area__loading": "_input-area__loading_1aom8_42"
}, he = ({
  onSendMessage: r,
  placeholder: a = "Type a message...",
  isLoading: n = !1
}) => {
  const { inputValue: i, handleInputChange: s, handleSubmit: l } = ge({
    onSubmit: r,
    isLoading: n
  });
  return /* @__PURE__ */ o.jsxs("form", { className: w["input-area"], onSubmit: l, children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "text",
        value: i,
        onChange: s,
        placeholder: a,
        disabled: n,
        className: w["input-area__input"],
        "aria-label": "Message input"
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "submit",
        disabled: n || !i.trim(),
        className: w["input-area__button"],
        "aria-label": "Send message",
        children: n ? /* @__PURE__ */ o.jsx("span", { className: w["input-area__loading"], children: "..." }) : /* @__PURE__ */ o.jsx("span", { children: "Send" })
      }
    )
  ] });
}, Ee = {
  "chat-container": "_chat-container_1hxk8_8"
}, Te = ({
  initialMessages: r = [],
  botName: a = "Chatbot",
  botAvatar: n,
  userAvatar: i,
  placeholder: s = "Type a message...",
  theme: l,
  callbacks: m = {}
}) => {
  const { messages: f, isLoading: E, sendMessage: d } = ve({
    initialMessages: r,
    callbacks: m
  }), v = be(l);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: Ee["chat-container"],
      style: v,
      children: [
        /* @__PURE__ */ o.jsx(de, { botName: a, botAvatar: n }),
        /* @__PURE__ */ o.jsx(
          pe,
          {
            messages: f,
            botName: a,
            botAvatar: n,
            userAvatar: i
          }
        ),
        /* @__PURE__ */ o.jsx(
          he,
          {
            onSendMessage: d,
            placeholder: s,
            isLoading: E
          }
        )
      ]
    }
  );
};
export {
  Te as ChatContainer,
  Te as default,
  ve as useChatbot,
  ge as useInput,
  xe as useMessages,
  be as useTheme
};
