(function (e) {
  function a(a) {
    for (var s, n, c = a[0], d = a[1], i = a[2], l = 0, b = []; l < c.length; l++)
      (n = c[l]), Object.prototype.hasOwnProperty.call(o, n) && o[n] && b.push(o[n][0]), (o[n] = 0);
    for (s in d) Object.prototype.hasOwnProperty.call(d, s) && (e[s] = d[s]);
    u && u(a);
    while (b.length) b.shift()();
    return r.push.apply(r, i || []), t();
  }
  function t() {
    for (var e, a = 0; a < r.length; a++) {
      for (var t = r[a], s = !0, c = 1; c < t.length; c++) {
        var d = t[c];
        0 !== o[d] && (s = !1);
      }
      s && (r.splice(a--, 1), (e = n((n.s = t[0]))));
    }
    return e;
  }
  var s = {},
    o = { app: 0 },
    r = [];
  function n(a) {
    if (s[a]) return s[a].exports;
    var t = (s[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
  }
  (n.m = e),
    (n.c = s),
    (n.d = function (e, a, t) {
      n.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, a) {
      if ((1 & a && (e = n(e)), 8 & a)) return e;
      if (4 & a && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if ((n.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & a && "string" != typeof e))
        for (var s in e)
          n.d(
            t,
            s,
            function (a) {
              return e[a];
            }.bind(null, s)
          );
      return t;
    }),
    (n.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return n.d(a, "a", a), a;
    }),
    (n.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (n.p = "/f1game/dist/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = c.push.bind(c);
  (c.push = a), (c = c.slice());
  for (var i = 0; i < c.length; i++) a(c[i]);
  var u = d;
  r.push([0, "chunk-vendors"]), t();
})({
  0: function (e, a, t) {
    e.exports = t("56d7");
  },
  "405e": function (e, a, t) {
    "use strict";
    t("5090");
  },
  4678: function (e, a, t) {
    var s = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function o(e) {
      var a = r(e);
      return t(a);
    }
    function r(e) {
      if (!t.o(s, e)) {
        var a = new Error("Cannot find module '" + e + "'");
        throw ((a.code = "MODULE_NOT_FOUND"), a);
      }
      return s[e];
    }
    (o.keys = function () {
      return Object.keys(s);
    }),
      (o.resolve = r),
      (e.exports = o),
      (o.id = "4678");
  },
  5090: function (e, a, t) {},
  "543d": function (e, a, t) {},
  "56d7": function (e, a, t) {
    "use strict";
    t.r(a);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var s = t("7a23"),
      o = t("ad3d"),
      r = t("ecee"),
      n = t("c074");
    function c(e, a, t, o, r, n) {
      var c = Object(s["o"])("LandingPage"),
        d = Object(s["o"])("UltimaCorrida");
      return Object(s["k"])(), Object(s["d"])(s["a"], null, [Object(s["g"])(c), Object(s["g"])(d)], 64);
    }
    var d = function (e) {
        return Object(s["m"])("data-v-1289adb9"), (e = e()), Object(s["l"])(), e;
      },
      i = { class: "container" },
      u = { class: "wrapper" },
      l = { class: "container-tempo" },
      b = { class: "container-dados" },
      j = { class: "container-conteudo" },
      f = ["src"],
      p = d(function () {
        return Object(s["e"])("h1", { class: "titulo" }, "Bolão Fórmula 1", -1);
      }),
      m = d(function () {
        return Object(s["e"])("h3", { class: "descricao-jogo" }, "Jogo de Bolão das corridas", -1);
      }),
      g = d(function () {
        return Object(s["e"])(
          "p",
          { class: "explicacao-jogo" },
          " Chute os resultados das corridas e desafie seus amigos para ver quem faz o melhor bolão ",
          -1
        );
      }),
      O = { class: "container-jogar" },
      h = { href: "#", class: "btn btn-jogar" },
      v = Object(s["f"])("Jogar Bolão Fórmula 1 ");
    function C(e, a, t, o, r, n) {
      var c = Object(s["o"])("TempoProxCorrida"),
        d = Object(s["o"])("font-awesome");
      return (
        Object(s["k"])(),
        Object(s["d"])("div", i, [
          Object(s["e"])("div", u, [
            Object(s["e"])("div", l, [Object(s["g"])(c)]),
            Object(s["e"])("div", b, [
              Object(s["e"])("div", j, [
                Object(s["e"])("img", { src: r.linkLogo, alt: "Logo", class: "logo" }, null, 8, f),
                p,
                m,
                g,
              ]),
              Object(s["e"])("div", O, [
                Object(s["e"])("a", h, [v, Object(s["g"])(d, { class: "icone-seta", icon: "arrow-right" })]),
              ]),
            ]),
          ]),
        ])
      );
    }
    t("4d90"), t("d3b7"), t("25f0");
    var k = function (e) {
        return Object(s["m"])("data-v-763d8d66"), (e = e()), Object(s["l"])(), e;
      },
      y = { class: "contador" },
      T = { class: "tempo-restante" },
      w = k(function () {
        return Object(s["e"])(
          "div",
          { class: "texto-contador" },
          [Object(s["e"])("p", { class: "texto-tempo" }, "para próxima corrida")],
          -1
        );
      });
    function x(e, a, t, o, r, n) {
      return (
        Object(s["k"])(),
        Object(s["d"])(
          s["a"],
          null,
          [
            Object(s["e"])("div", y, [
              Object(s["e"])(
                "h2",
                T,
                Object(s["p"])(r.dadosTempoCorridaSeguinte.dias.toString().padStart(2, "0")) +
                  "d " +
                  Object(s["p"])(r.dadosTempoCorridaSeguinte.horas.toString().padStart(2, "0")) +
                  "h " +
                  Object(s["p"])(r.dadosTempoCorridaSeguinte.minutos.toString().padStart(2, "0")) +
                  "m " +
                  Object(s["p"])(r.dadosTempoCorridaSeguinte.segundos.toString().padStart(2, "0")) +
                  "s ",
                1
              ),
            ]),
            w,
          ],
          64
        )
      );
    }
    var S = t("1da1"),
      D = (t("96cf"), t("ac1f"), t("1276"), t("a15b"), t("c1df")),
      z = {
        data: function () {
          return {
            anoAtual: new Date().getUTCFullYear(),
            dataAtual: D().format("YYYY-MM-DD"),
            dataAtualFormatada: D().format("DD-MM-YYYY"),
            dadosTempoCorridaSeguinte: { dias: "00", horas: "00", minutos: "00", segundos: "00" },
          };
        },
        methods: {
          obterDataProxCorrida: function () {
            return Object(S["a"])(
              regeneratorRuntime.mark(function e() {
                var a, t, s, o, r, n, c;
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (a = "https://ergast.com/api/f1/current/next.json"), (e.next = 3), fetch(a);
                      case 3:
                        return (t = e.sent), (e.next = 6), t.json();
                      case 6:
                        return (
                          (s = e.sent),
                          (o = s.MRData.RaceTable.Races[0].date),
                          (r = s.MRData.RaceTable.Races[0].time.split("Z")[0]),
                          (n = o.split("-")),
                          (c = r.split("Z")),
                          (c = c.join("").split(":")),
                          e.abrupt("return", {
                            dia: n[2],
                            mes: n[1],
                            ano: n[0],
                            hora: c[0],
                            minutos: c[1],
                            segundos: c[2],
                          })
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          formatarDadosDiaAtual: function (e, a) {
            var t = e.split(":"),
              s = a.split("/");
            return (
              console.log(a),
              {
                dia: parseInt(s[0]),
                mes: parseInt(s[1]),
                ano: parseInt(s[2]),
                hora: parseInt(t[0]),
                minutos: parseInt(t[1]),
                segundos: parseInt(t[2]),
              }
            );
          },
          calcularTempoProxCorrida: function () {
            var e = this;
            return Object(S["a"])(
              regeneratorRuntime.mark(function a() {
                var t, s, o, r, n, c, d, i, u;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), e.obterDataProxCorrida();
                      case 2:
                        if (
                          ((t = a.sent),
                          (s = new Date().toLocaleTimeString("pt-BR")),
                          (o = new Date().toLocaleDateString("pt-BR")),
                          (r = e.formatarDadosDiaAtual(s, o)),
                          (n = new Date(r.ano, r.mes, r.dia, r.hora, r.minutos, r.segundos)),
                          (c = new Date(t.ano, t.mes, t.dia, t.hora, t.minutos, t.segundos)),
                          (d = c.getTime() - 108e5),
                          (i = n.getTime()),
                          (u = e.calcularDiferencasDatas(i, d)),
                          0 !== u)
                        ) {
                          a.next = 13;
                          break;
                        }
                        return a.abrupt("return");
                      case 13:
                        e.atualizarTempoRestanteCorrida(u);
                      case 14:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          calcularDiferencasDatas: function (e, a) {
            var t = (a - e) / 1e3,
              s = Math.floor(t % 60);
            t = Math.floor(t / 60);
            var o = t % 60;
            t = Math.floor(t / 60);
            var r = t % 24;
            t = Math.floor(t / 24);
            var n = t;
            return { diferencaSegundos: s, diferencaMinutos: o, diferencaHoras: r, diferencaDias: n };
          },
          atualizarTempoRestanteCorrida: function (e) {
            (this.dadosTempoCorridaSeguinte.dias = e.diferencaDias),
              (this.dadosTempoCorridaSeguinte.horas = e.diferencaHoras),
              (this.dadosTempoCorridaSeguinte.minutos = e.diferencaMinutos),
              (this.dadosTempoCorridaSeguinte.segundos = e.diferencaSegundos);
          },
        },
        created: function () {
          this.calcularTempoProxCorrida();
        },
        mounted: function () {
          var e = this;
          window.setInterval(function () {
            0 === e.dadosTempoCorridaSeguinte.segundos
              ? ((e.dadosTempoCorridaSeguinte.segundos = 59), e.dadosTempoCorridaSeguinte.minutos--)
              : e.dadosTempoCorridaSeguinte.segundos--,
              0 === e.dadosTempoCorridaSeguinte.minutos &&
                0 === e.dadosTempoCorridaSeguinte.segundos &&
                ((e.dadosTempoCorridaSeguinte.segundos = 59),
                (e.dadosTempoCorridaSeguinte.minutos = 59),
                e.dadosTempoCorridaSeguinte.horas--);
          }, 1e3);
        },
      },
      R = (t("ac9f"), t("6b0d")),
      P = t.n(R);
    const M = P()(z, [
      ["render", x],
      ["__scopeId", "data-v-763d8d66"],
    ]);
    var U = M,
      _ = {
        components: { TempoProxCorrida: U },
        data: function () {
          return { linkLogo: t("cf05") };
        },
      };
    t("6bf1");
    const I = P()(_, [
      ["render", C],
      ["__scopeId", "data-v-1289adb9"],
    ]);
    var L = I,
      Y =
        (t("b0c0"),
        function (e) {
          return Object(s["m"])("data-v-3678aaf9"), (e = e()), Object(s["l"])(), e;
        }),
      N = { class: "container-tabela" },
      A = { class: "wrapper-tabela" },
      F = { key: 0, class: "carregando" },
      B = Y(function () {
        return Object(s["e"])("h2", { class: "texto-carregando" }, "Carregando...", -1);
      }),
      J = [B],
      q = { key: 1, class: "tabela" },
      E = { class: "titulo-tabela" },
      H = Object(s["f"])(" Última corrida "),
      V = Y(function () {
        return Object(s["e"])("span", { class: "traco-separacao" }, "-", -1);
      }),
      Z = { class: "subtitulo-tabela" },
      G = { class: "container-table" },
      K = { class: "titulo-corrida" },
      Q = { class: "tabela" },
      W = { class: "posicao-piloto" },
      X = { class: "numero-piloto" },
      $ = { class: "nome-piloto" },
      ee = { class: "construtor-piloto" },
      ae = { key: 0, class: "tempo-piloto" },
      te = { key: 1, class: "tempo-piloto" },
      se = { class: "voltas-piloto" },
      oe = { class: "pontos-piloto" };
    function re(e, a, t, o, r, n) {
      return (
        Object(s["k"])(),
        Object(s["d"])("div", N, [
          Object(s["e"])("div", A, [
            r.carregando
              ? (Object(s["k"])(), Object(s["d"])("div", F, J))
              : (Object(s["k"])(),
                Object(s["d"])("div", q, [
                  Object(s["e"])("h2", E, [
                    H,
                    V,
                    Object(s["f"])(" Temporada " + Object(s["p"])(r.dadosUltimaCorrida.temporada), 1),
                  ]),
                  Object(s["e"])("h2", Z, "Rodada " + Object(s["p"])(r.dadosUltimaCorrida.rodada), 1),
                  Object(s["e"])("div", G, [
                    Object(s["e"])(
                      "h2",
                      K,
                      Object(s["p"])(r.dadosUltimaCorrida.circuito) +
                        ", " +
                        Object(s["p"])(r.dadosUltimaCorrida.localizacao),
                      1
                    ),
                    Object(s["e"])("table", Q, [
                      Object(s["e"])("thead", null, [
                        Object(s["e"])("tr", null, [
                          (Object(s["k"])(!0),
                          Object(s["d"])(
                            s["a"],
                            null,
                            Object(s["n"])(r.dadosTabela.colunasTabela, function (e, a) {
                              return (
                                Object(s["k"])(),
                                Object(s["d"])(
                                  "th",
                                  { key: a, class: Object(s["j"])([e.classe, "dados-exibidos"]) },
                                  Object(s["p"])(e.nomeColuna),
                                  3
                                )
                              );
                            }),
                            128
                          )),
                        ]),
                      ]),
                      Object(s["e"])("tbody", null, [
                        (Object(s["k"])(!0),
                        Object(s["d"])(
                          s["a"],
                          null,
                          Object(s["n"])(r.dadosUltimaCorrida.dadosPosicoes, function (e) {
                            return (
                              Object(s["k"])(),
                              Object(s["d"])("tr", { key: e.number, class: "dados-tabela" }, [
                                Object(s["e"])("td", W, Object(s["p"])(e.position), 1),
                                Object(s["e"])("td", X, Object(s["p"])(e.number), 1),
                                Object(s["e"])(
                                  "td",
                                  $,
                                  Object(s["p"])(e.Driver.givenName) + " " + Object(s["p"])(e.Driver.familyName),
                                  1
                                ),
                                Object(s["e"])("td", ee, Object(s["p"])(e.Constructor.name), 1),
                                e.Time
                                  ? (Object(s["k"])(), Object(s["d"])("td", ae, Object(s["p"])(e.Time.time), 1))
                                  : (Object(s["k"])(), Object(s["d"])("td", te, Object(s["p"])(e.status), 1)),
                                Object(s["e"])("td", se, Object(s["p"])(e.laps), 1),
                                Object(s["e"])("td", oe, Object(s["p"])(e.points), 1),
                              ])
                            );
                          }),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ])),
          ]),
        ])
      );
    }
    t("caad"), t("2532");
    var ne = {
      data: function () {
        return {
          dadosTabela: {
            colunasTabela: [
              { nomeColuna: "Posição", classe: "coluna-posicao" },
              { nomeColuna: "Número", classe: "coluna-numero" },
              { nomeColuna: "Piloto", classe: "coluna-piloto" },
              { nomeColuna: "Carro", classe: "coluna-carro" },
              { nomeColuna: "Tempo", classe: "coluna-tempo" },
              { nomeColuna: "Voltas", classe: "coluna-voltas" },
              { nomeColuna: "Pts", classe: "coluna-pts" },
            ],
          },
          colunasTabela: ["Posição", "Número", "Piloto", "Carro", "Voltas", "Pts"],
          dadosUltimaCorrida: { tempoPilotos: [] },
          carregando: !0,
        };
      },
      methods: {
        obterDadosUltimaCorrida: function () {
          return Object(S["a"])(
            regeneratorRuntime.mark(function e() {
              var a, t, s;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (a = "https://ergast.com/api/f1/current/last/results.json"), (e.next = 3), fetch(a);
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (s = e.sent), e.abrupt("return", s.MRData.RaceTable.Races[0]);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        preencherTabelaUltimaCorrida: function () {
          var e = this;
          return Object(S["a"])(
            regeneratorRuntime.mark(function a() {
              var t, s, o;
              return regeneratorRuntime.wrap(function (a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (o = function () {
                          for (var e = 0; e < s.dadosCorrida.Results.length; e++)
                            s.dadosCorrida.Results[e].status.includes(":") ||
                              s.dadosCorrida.Results[e].status.includes("+") ||
                              (s.dadosCorrida.Results[e].status = "DNF");
                        }),
                        (a.next = 3),
                        e.obterDadosUltimaCorrida()
                      );
                    case 3:
                      (t = a.sent),
                        (s = {
                          circuito: t.Circuit.circuitName,
                          localizacao: t.Circuit.Location.locality,
                          rodada: t.round,
                          temporada: t.season,
                          dadosCorrida: t,
                          dadosPosicoes: t.Results,
                        }),
                        o(),
                        Object.assign(e.dadosUltimaCorrida, s),
                        (e.carregando = !1);
                    case 8:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )();
        },
      },
      created: function () {
        this.preencherTabelaUltimaCorrida();
      },
    };
    t("405e");
    const ce = P()(ne, [
      ["render", re],
      ["__scopeId", "data-v-3678aaf9"],
    ]);
    var de = ce,
      ie = { name: "App", components: { LandingPage: L, UltimaCorrida: de } };
    t("76ea");
    const ue = P()(ie, [["render", c]]);
    var le = ue;
    r["c"].add(n["a"]), Object(s["c"])(le).component("font-awesome", o["a"]).mount("#app");
  },
  "6bf1": function (e, a, t) {
    "use strict";
    t("543d");
  },
  "76ea": function (e, a, t) {
    "use strict";
    t("f612");
  },
  ac9f: function (e, a, t) {
    "use strict";
    t("cc84");
  },
  cc84: function (e, a, t) {},
  cf05: function (e, a, t) {
    e.exports = "img/logo.973e5e3b.png";
  },
  f612: function (e, a, t) {},
});
//# sourceMappingURL=app.c7cbd754.js.map
