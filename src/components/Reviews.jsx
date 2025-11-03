import React from 'react';
import { Star } from 'lucide-react';

const Rating = ({ value = 5 }) => (
  <div className="flex items-center gap-1 text-[#66BB6A]">
    {Array.from({ length: value }).map((_, i) => (
      <Star key={i} size={16} className="text-[#66BB6A]" fill="#66BB6A" />
    ))}
  </div>
);

const people = [
  {
    name: 'Aisha Khan',
    role: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Neot helped me switch from zero to confidently building full-stack apps. The focus on practice is perfect.',
    rating: 5,
  },
  {
    name: 'Daniel Park',
    role: 'Data Analyst',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    text: 'The AI mentor explains concepts in a way that finally clicked for me. My daily streak keeps me motivated.',
    rating: 5,
  },
  {
    name: 'Sofia Martinez',
    role: 'Frontend Developer',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    text: 'Minimal, fast, and no fluff. I learned React basics in a week and shipped a small project.',
    rating: 5,
  },
  {
    name: 'Kwame Mensah',
    role: 'Student',
    photo: 'https://randomuser.me/api/portraits/men/12.jpg',
    text: 'I love the focused lessons. The instant feedback on my code helped me fix mistakes early.',
    rating: 4,
  },
  {
    name: 'Li Wei',
    role: 'Product Manager',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg',
    text: 'Clear path, great UX, and I can learn on my phone during commute. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Emma Johansson',
    role: 'CS Undergraduate',
    photo: 'https://randomuser.me/api/portraits/women/36.jpg',
    text: 'The streaks and XP make it surprisingly fun to study every day. It just works.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <main className="pt-24 md:pt-28 bg-white dark:bg-neutral-950 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Reviews</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Real people. Real results. Here’s what learners say about Neot.</p>
          </div>
          <div className="hidden md:block text-sm text-gray-500 dark:text-gray-400">Average rating <span className="font-semibold text-gray-800 dark:text-gray-200">4.9/5</span></div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <article key={p.name} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm ring-1 ring-gray-100 dark:ring-neutral-800">
              <div className="flex items-center gap-4">
                <img src={p.photo} alt={p.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{p.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">“{p.text}”</p>
              <div className="mt-4"><Rating value={p.rating} /></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Reviews;
