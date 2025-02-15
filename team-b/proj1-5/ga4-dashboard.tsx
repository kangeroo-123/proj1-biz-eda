import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const GA4Dashboard = () => {
  const usersData = [
    {day: '0000', active: 10, new: 7},
    {day: '0007', active: 11, new: 15},
    {day: '0014', active: 3, new: 3},
    {day: '0021', active: 20, new: 15},
    {day: '0027', active: 11, new: 10}
  ];

  const channelData = [
    {name: 'Direct', users: 121},
    {name: 'Organic Search', users: 118},
    {name: 'Referral', users: 47},
    {name: 'Paid Search', users: 6},
    {name: 'Unassigned', users: 2}
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>활성 사용자 및 신규 사용자 추이</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="active" stroke="#8884d8" name="활성 사용자" />
                <Line type="monotone" dataKey="new" stroke="#82ca9d" name="신규 사용자" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>채널별 신규 사용자 분포</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="users"
                  nameKey="name"
                  label
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GA4Dashboard;