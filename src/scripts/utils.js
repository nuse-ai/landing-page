const options = { weekday: 'long', year: 'numeric', month: 'long' };

export const getOctaneCommit = () => {
  const body = fetch('https://api.github.com/repos/OctaneWeb/Octane/commits/octane_http').then(
    res => res.json()
  );

  return body;
};

export const getCoChatCommit = () => {
  const body = fetch('https://api.github.com/repos/Daksh14/Co-Chat/commits/master').then(
    res => res.json()
  );

  return body;
};

export const getRTomlCommit = () => {
  const body = fetch('https://api.github.com/repos/Daksh14/Rtoml/commits/develop').then(
    res => res.json()
  );

  return body;
}

export const getSanitizerCommit = () => {
  const body = fetch('https://api.github.com/repos/dashxhq/sanitizer/commits/develop').then(
    res => res.json()
  );

  return body;
}

export const getHash = (res) => {
 let hash = res.commit.tree.sha;

 if (typeof hash === 'string' || hash instanceof String) {
  return `<a class="underline" href="${res.html_url}">${hash.substring(0, 7)}</a>`
 } else {
  return "00000";
 }
}


export const getDate = (json) => {
 let date = json.commit.author.date;

 if (typeof date === 'string' || date instanceof String) {
  let parsed_date = new Date(date);
  return new Intl.DateTimeFormat('en-US', options).format(parsed_date)
 } else {
  return "N/A";
 }
}

export const insertDate = (ele, date) => {
  var span = document.createElement("span");
  var anchor = document.createElement("a");
  span.innerHTML = " &#x2022; " + date;
  span.classList.add('commit-details');
  ele.parentNode.insertBefore(span, ele.nextSibling);
}
