const o = document.getElementById("navBar")
  , s = o.querySelectorAll(".opacity-0:not(#banner)");
o.classList.remove("-translate-y-full", "opacity-0");
s.forEach((e,a)=>{
    setTimeout(()=>{
        e.classList.remove("opacity-0")
    }
    , 250 * a),
    a === s.length - 1 && setTimeout(()=>{
        n.classList.remove("opacity-0")
    }
    , 250 * a + 250)
}
);
document.getElementById("navBarBuyButton").addEventListener("click", ()=>{
    document.getElementById("featureList").scrollIntoView({
        behavior: "smooth"
    })
}
);
let t;
const n = document.getElementById("navBarbanner")
  , c = document.getElementById("bannerText");
async function r() {
    await fetch("https://raw.githubusercontent.com/shlexware/SiriusDependencies/main/banner.json").then(e=>e.json()).then(e=>{
        t = e
    }
    ),
    c.innerHTML = t.text,
    c.style.color = t.txtcolor,
    n.style.backgroundColor = t.bgcolor,
    t.show === !0 && (n.classList.remove("hidden"),
    n.addEventListener("click", ()=>{
        o.classList.add("-translate-y-full", "opacity-0"),
        setTimeout(()=>{
            n.classList.add("hidden")
        }
        , 500)
    }
    ))
}
r();
