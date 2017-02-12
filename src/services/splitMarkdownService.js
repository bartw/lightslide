export default function splitMarkdown(markdown) {
    const rawSlides = markdown.split('\n\n----------\n\n');
    const slides = rawSlides.map((slide, index) => ({ id: index, content: slide }));
    return slides;
}