! function() {
    if (window.small === !0 && "" === window.location.hash.replace(/\W/g, "")) {
        var e = document.getElementById("content"),
            t = document.createElement("div");
        angular.module("static", ["templates"]).run(["$templateCache", function(t) {
            function n() {
                document.body.className = "busy"
            }
            e.innerHTML = t.get("home/home-static.html"), document.body.className = "", window.__killStatic = function() {
                window.removeEventListener("hashchange", n, !1)
            }, window.addEventListener("hashchange", n, !1), angular.element(document.getElementById("content")).addClass("pre-pride-parade")
        }]), angular.bootstrap(t, ["static"]), e.appendChild(t)
    }
}();