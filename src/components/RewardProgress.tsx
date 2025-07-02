
import { motion } from 'framer-motion';
import { Gift, Coins, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const RewardProgress = () => {
  const rewardPoints = 8450;
  const nextRewardThreshold = 10000;
  const progressPercentage = (rewardPoints / nextRewardThreshold) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-700 dark:text-blue-300">
            <Coins className="h-5 w-5" />
            <span>Reward Points</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {rewardPoints.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Points</p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="p-3 bg-blue-500 rounded-full"
            >
              <Coins className="h-6 w-6 text-white" />
            </motion.div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to next reward</span>
              <span>{nextRewardThreshold - rewardPoints} points needed</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-700 dark:text-green-300">
            <Zap className="h-5 w-5" />
            <span>Streak</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">15</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Days Active</p>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex p-2 bg-green-500 rounded-full"
            >
              <Zap className="h-4 w-4 text-white fill-current" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
