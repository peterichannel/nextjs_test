export default function customImageLoader({ src }) {
  return process.env.NODE_ENV === 'production'
    ? `https://peterichannel.github.io/nextjs_test${src}`
    : src;
}
