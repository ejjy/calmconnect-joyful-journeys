
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Calendar, Heart, MessageCircle } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
}) => {
  const trendColor = trend === 'up' 
    ? 'text-sleepico-green' 
    : trend === 'down' 
      ? 'text-destructive' 
      : 'text-amber-500';

  return (
    <Card className="sleepico-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-sleepico-light-gray flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        {trend && trendValue && (
          <div className={`text-xs mt-2 ${trendColor} font-medium`}>
            {trendValue}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Weekly Mood Score"
        value="78%"
        description="Based on your tracked moods"
        icon={<Heart className="h-4 w-4 text-sleepico-purple" />}
        trend="up"
        trendValue="+12% from last week"
      />
      <StatCard
        title="Stress Level"
        value="Moderate"
        description="Average from past 7 days"
        icon={<Activity className="h-4 w-4 text-sleepico-blue" />}
        trend="down"
        trendValue="-8% from last week"
      />
      <StatCard
        title="Forum Activity"
        value="15"
        description="Interactions in the past week"
        icon={<MessageCircle className="h-4 w-4 text-sleepico-green" />}
        trend="neutral"
        trendValue="Same as last week"
      />
      <StatCard
        title="Next Session"
        value="2"
        description="Days until your next counseling"
        icon={<Calendar className="h-4 w-4 text-sleepico-blue" />}
      />
    </div>
  );
};

export default DashboardStats;
