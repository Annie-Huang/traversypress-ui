'use client';
// Need to be a client component in order to use the chart.

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import data from '@/data/analytics';

const AnalyticsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For This Year</CardTitle>
        <CardDescription>Views Per Month</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AnalyticsChart;
