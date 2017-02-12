export default function fetchMarkdown(url) {
    return fetch(url, { mode: 'cors' })
        .then(response => {
            return response.text();
        })
        .then(text => {
            return text;
        })
        .catch(() => {
            return '';
        });
}