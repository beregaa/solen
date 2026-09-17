// REAL reviews only — copy them from the Facebook page (Reviews / Recommendations tab).
// Leave the array empty until you add real ones; the widget and Google/AI data use this file.
//
// Fields:
//   name        — reviewer name as shown on Facebook (or first name + initial)
//   text        — the review text, unchanged
//   date        — 'YYYY-MM-DD' (when it was posted)
//   recommends  — true if they clicked "Yes, recommend" on Facebook
//   url         — (optional) direct link to that review/post
//   avatar      — (optional) '/reviews/name.webp' in the public folder
//
// Example (delete the // to use the shape):
// {
//   name: 'გიორგი ბ.',
//   text: 'სწრაფად და ხარისხიანად დამიმონტაჟეს ქვაბი...',
//   date: '2026-03-14',
//   recommends: true,
//   url: 'https://www.facebook.com/...',
// },

export const FACEBOOK_REVIEWS_URL =
  'https://www.facebook.com/profile.php?id=100085867923367&sk=reviews'

const reviewsData = []

export default reviewsData
