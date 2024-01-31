function generate() {
    const display = document.getElementById("display").value;
    const actual = document.getElementById("actual").value;
    const generatedLink = document.getElementById("generatedLink");
    if (!display || !actual || !display.match(/^(https?):\/\//) || !actual.match(/^(https?):\/\//)) {
        alert("URL?");
        return;
    }
    const prefix = display.split("://")[0] + "://";
    const args = display.split("://").slice(1).join('').split('.');
    const $ = [`[${prefix}](${actual}})`];
    let count = 0;
    for (const arg of args) {
      if (count == 0) {
        $.push(`[${arg}](${actual})`);
      } else {
        $.push(`[.${arg}](${actual})`);
      }
      count++
    }
    generatedLink.innerHTML = $.join('');
};
