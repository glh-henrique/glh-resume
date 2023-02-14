export const appendScript = (scriptToAppend: string) => {
  console.log("appendScript", scriptToAppend);
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}