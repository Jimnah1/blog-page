// pages/blog/[slug].js
import { fetchEntries } from "../../lib/contentful";

export async function getStaticPaths() {
  const posts = await fetchEntries();

  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: false, // Can also be 'blocking' or true for ISR
  };
}

export async function getStaticProps({ params }) {
  const posts = await fetchEntries();
  const post = posts.find((p) => p.fields.slug === params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // ISR
  };
}

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <div>{post.fields.body}</div>
    </div>
  );
}
