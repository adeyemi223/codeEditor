function run() {
  let html_code1 = document.getElementById("html_code").value;
  let css_code1 = document.getElementById("css_code").value;
  let js_code1 = document.getElementById("js_code").value;
  let output1 = document.getElementById("output");

  output1.contentDocument.body.innerHTML = html_code1;

  output1.contentDocument.body.innerHTML =
    html_code1 + "<style>" + css_code1 + "</style>";

  output1.contentWindow.eval(js_code1);
}
