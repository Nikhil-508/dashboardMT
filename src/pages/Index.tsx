
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { Header } from '../components/Header';
import { UserProfileCard } from '../components/UserProfileCard';
import { BenefitsSection } from '../components/BenefitsSection';
import { RewardProgress } from '../components/RewardProgress';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useThemeStore();

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <UserProfileCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <RewardProgress />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <BenefitsSection />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
