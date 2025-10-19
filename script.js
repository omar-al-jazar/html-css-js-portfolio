// بيانات الموقع (عدل هنا لو عايز)
var siteData = {
  name: "OMAR BARAKAT", // اسمك اللي هيظهر في كل مكان
  brand: "OMAR BARAKAT", // اسم البراند في اللوجو
  role: "IT Support Engineer | AWS & Terraform (Upskilling)",
  tagline: "IT Support • VIP/Enterprise • M365/Exchange • AD • VPN • AWS/Terraform",
  links: {
    github:  "https://github.com/omar-al-jazar",
    linkedin:"https://www.linkedin.com/in/omar-al-jazar",
    email:   "omar.hamdy1999@protonmail.com"
  },
  files: {
    cv:  "assets/resume-example.pdf", // غيّر المسار لو الملف مختلف
    inq: "assets/inquiry.pdf"
  }
};

function bindText() {
  var nameEls = document.querySelectorAll("[data-bind='name']");
  for (var i = 0; i < nameEls.length; i++) nameEls[i].textContent = siteData.name;

  var brandEls = document.querySelectorAll("[data-bind='brand']");
  for (var j = 0; j < brandEls.length; j++) brandEls[j].textContent = siteData.brand;

  var tag = document.querySelector("[data-bind='tagline']");
  if (tag) tag.textContent = siteData.tagline;

  var role = document.querySelector("[data-bind='role']");
  if (role) role.textContent = siteData.role;
}

function bindLinks() {
  function setAnchor(id, href) {
    var a = document.getElementById(id);
    if (!a) return;
    a.href = href || "#";
    if (href && href !== "#") {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  }

  // Profile social
  setAnchor("link-github", siteData.links.github);
  setAnchor("link-linkedin", siteData.links.linkedin);
  setAnchor("link-email", siteData.links.email ? ("mailto:" + siteData.links.email) : "#");
  // Contact social
  setAnchor("cl-github", siteData.links.github);
  setAnchor("cl-linkedin", siteData.links.linkedin);
  setAnchor("cl-email", siteData.links.email ? ("mailto:" + siteData.links.email) : "#");
}

function bindFileButton(btnId, filePath){
  var btn = document.getElementById(btnId);
  if (!btn) return;
  fetch(filePath, { method: "HEAD" })
    .then(function(res){
      if (res.ok) { 
        btn.href = filePath; 
        btn.classList.remove("disabled"); 
        btn.setAttribute("target","_blank"); 
        btn.setAttribute("rel","noopener"); 
      }
      else { 
        btn.classList.add("disabled"); 
        btn.title = "File not found"; 
        btn.removeAttribute("href"); 
      }
    })
    .catch(function(){
      btn.classList.add("disabled"); 
      btn.title = "File not found"; 
      btn.removeAttribute("href"); 
    });
}

document.addEventListener("DOMContentLoaded", function(){
  bindText();
  bindLinks();
  bindFileButton("btn-cv", siteData.files.cv);
  bindFileButton("btn-inq", siteData.files.inq);
});
