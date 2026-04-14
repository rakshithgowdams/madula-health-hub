import { motion } from 'framer-motion';
import { ArrowRight, User, MessageSquare } from 'lucide-react';

const posts = [
  { img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400', title: 'How to Maintain A Balanced Diet And Exercise.', date: '12 May' },
  { img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400', title: 'Coping strategies for stress, anxiety, and depression.', date: '18 Jun' },
  { img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400', title: 'Latest medical technologies and treatments available.', date: '25 Jul' },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="text-sm font-semibold text-primary"># Blog</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mt-2">Our Medical Blog.</motion.h2>
          </div>
          <motion.a href="#" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary">
            View All Blog <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative">
                <img src={post.img} alt={post.title} loading="lazy" className="w-full h-52 object-cover" />
                <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center text-xs font-bold">
                  <span>{post.date.split(' ')[0]}</span>
                  <span className="text-[10px] font-normal">{post.date.split(' ')[1]}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> By Admin</span>
                  <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> 02 Comment</span>
                </div>
                <h3 className="font-bold font-heading text-foreground mb-4 leading-snug">{post.title}</h3>
                <motion.a href="#" whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
