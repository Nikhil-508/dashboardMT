
import { motion } from 'framer-motion';
import { CreditCard, Shield, Percent, Gift, Smartphone, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    id: 1,
    title: 'Credit Card Rewards',
    description: 'Earn 2x points on all purchases with premium credit cards',
    icon: CreditCard,
    color: 'from-purple-500 to-pink-500',
    available: true,
  },
  {
    id: 2,
    title: 'Insurance Coverage',
    description: 'Comprehensive protection for your financial transactions',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    available: true,
  },
  {
    id: 3,
    title: 'Cashback Offers',
    description: 'Get up to 20% cashback on partner merchant purchases',
    icon: Percent,
    color: 'from-green-500 to-teal-500',
    available: false,
  },
  {
    id: 4,
    title: 'Exclusive Rewards',
    description: 'Access to limited-time offers and premium experiences',
    icon: Gift,
    color: 'from-orange-500 to-red-500',
    available: true,
  },
  {
    id: 5,
    title: 'Mobile Perks',
    description: 'Special discounts on mobile recharges and bill payments',
    icon: Smartphone,
    color: 'from-indigo-500 to-purple-500',
    available: true,
  },
  {
    id: 6,
    title: 'Travel Benefits',
    description: 'Airport lounge access and travel insurance coverage',
    icon: Plane,
    color: 'from-emerald-500 to-blue-500',
    available: false,
  },
];

export const BenefitsSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Your Benefits
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Unlock exclusive rewards and premium experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`} />
              
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${benefit.color} text-white`}
                  >
                    <benefit.icon className="h-6 w-6" />
                  </motion.div>
                  
                  {!benefit.available && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {benefit.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                <Button
                  className={`w-full ${
                    benefit.available
                      ? `bg-gradient-to-r ${benefit.color} hover:opacity-90 text-white border-0`
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                  } transition-all duration-300`}
                  disabled={!benefit.available}
                >
                  {benefit.available ? 'Claim Now' : 'Coming Soon'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
