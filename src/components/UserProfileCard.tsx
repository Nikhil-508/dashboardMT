
import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const UserProfileCard = () => {
  const userLevel = 7;
  const currentXP = 2850;
  const nextLevelXP = 3000;
  const progressPercentage = (currentXP / nextLevelXP) * 100;

  return (
    <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Avatar className="h-16 w-16 border-4 border-white/20">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </motion.div>
            
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <div className="flex items-center space-x-2 mt-1">
                <Trophy className="h-4 w-4" />
                <span className="text-sm opacity-90">Level {userLevel} Member</span>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-right"
          >
            <div className="flex items-center space-x-1 mb-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-lg font-semibold">4.8</span>
            </div>
            <p className="text-xs opacity-80">Credit Score</p>
          </motion.div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4" />
            <span>XP Progress</span>
          </span>
          <span>{currentXP} / {nextLevelXP} XP</span>
        </div>
        
        <div className="space-y-2">
          <Progress 
            value={progressPercentage} 
            className="h-3 bg-white/20" 
          />
          <div className="flex justify-between text-xs opacity-80">
            <span>Level {userLevel}</span>
            <span>{nextLevelXP - currentXP} XP to Level {userLevel + 1}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
