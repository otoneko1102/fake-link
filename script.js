function generate() {
  const display = document.getElementById("display").value;
  const actual = document.getElementById("actual").value;
  const generatedLink = document.getElementById("generatedLink");
    
  if (!display || !actual || !display.match(/^(https?):\/\/\S/) || !actual.match(/^(https?):\/\/\S/)) {
    alert("Missing parameters.");
    return;
  }

  const prefix = display.split("://")[0] + "://";
  const args = display.split("://").slice(1).join('').split('.');
  const generatedLinkParts = [`[${prefix}](${actual})`];
  let count = 0;
  for (const arg of args) {
    if (count === 0) {
      generatedLinkParts.push(`[${arg}](${actual})`);
    } else {
      generatedLinkParts.push(`[.${arg}](${actual})`);
    }
    count++;
  }
    
  const GeneratedLink = generatedLinkParts.join('');
  
  generatedLink.innerHTML = '';
  generatedLink.innerHTML = GeneratedLink;
    
  const tempInput = document.createElement('input');
  tempInput.value = GeneratedLink;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  alert('Generated link copied to clipboard!');
}
