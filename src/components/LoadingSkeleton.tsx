
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const LoadingSkeleton = () => {
  const shimmer = {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Skeleton */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="w-32 h-6" />
          </div>
          <div className="flex space-x-2">
            <Skeleton className="w-8 h-8 rounded" />
            <Skeleton className="w-8 h-8 rounded" />
            <Skeleton className="w-8 h-8 rounded" />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Profile Card Skeleton */}
        <Card className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-white/20 to-white/40"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 75%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={shimmer.animate}
                  transition={shimmer.transition}
                />
                <div className="space-y-2">
                  <Skeleton className="w-32 h-6 bg-white/30" />
                  <Skeleton className="w-24 h-4 bg-white/20" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="w-16 h-6 bg-white/30" />
                <Skeleton className="w-20 h-4 bg-white/20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="w-full h-3 bg-white/30" />
            <div className="flex justify-between">
              <Skeleton className="w-16 h-3 bg-white/20" />
              <Skeleton className="w-24 h-3 bg-white/20" />
            </div>
          </CardContent>
        </Card>

        {/* Reward Progress Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <Skeleton className="w-32 h-6" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <Skeleton className="w-24 h-8" />
                  <Skeleton className="w-20 h-4" />
                </div>
                <Skeleton className="w-12 h-12 rounded-full" />
              </div>
              <Skeleton className="w-full h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="w-16 h-6" />
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <Skeleton className="w-8 h-8 mx-auto" />
              <Skeleton className="w-16 h-4 mx-auto" />
              <Skeleton className="w-8 h-8 rounded-full mx-auto" />
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section Skeleton */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <Skeleton className="w-48 h-8 mx-auto" />
            <Skeleton className="w-64 h-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700" />
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Skeleton className="w-12 h-12 rounded-xl" />
                      <Skeleton className="w-20 h-5 rounded-full" />
                    </div>
                    <Skeleton className="w-32 h-6" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="w-full h-4" />
                      <Skeleton className="w-3/4 h-4" />
                    </div>
                    <Skeleton className="w-full h-10 rounded" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
