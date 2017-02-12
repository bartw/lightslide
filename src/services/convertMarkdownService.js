import showdown from 'showdown';

export default function convertMarkdownToHtml(markdown) {
    const converter = new showdown.Converter();
    return converter.makeHtml(markdown);
}