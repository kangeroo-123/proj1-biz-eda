import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 컬러 설정
const COLORS = ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#8884d8', '#82ca9d'];

const GAExplorationReport = () => {
  // 채널별 데이터
  const channelData = [
    {channel: "SNS", impressions: 334583229, clicks: 10045135, ctr: "3.00", spend: "23435500", revenue: "28074276", roas: "1.20"},
    {channel: "온라인", impressions: 333043888, clicks: 16646627, ctr: "5.00", spend: "16666027", revenue: "46075850", roas: "2.76"},
    {channel: "TV", impressions: 332385915, clicks: 3323666, ctr: "1.00", spend: "33248594", revenue: "9643527", roas: "0.29"}
  ];

  // 광고 형식별 데이터
  const formatData = [
    {format: "텍스트", impressions: 250623534, clicks: 7517963, ctr: "3.00", spend: "18410390", revenue: "21130714", roas: "1.15"},
    {format: "배너", impressions: 250606184, clicks: 7551729, ctr: "3.01", spend: "18334958", revenue: "21128225", roas: "1.15"},
    {format: "이미지", impressions: 247937899, clicks: 7453125, ctr: "3.01", spend: "18181790", revenue: "20688652", roas: "1.14"},
    {format: "동영상", impressions: 250845415, clicks: 7492611, ctr: "2.99", spend: "18422983", revenue: "20846063", roas: "1.13"}
  ];

  // 연령대별 데이터
  const ageGroups = [
    {group: "10대", count: 3914},
    {group: "20대", count: 19275},
    {group: "30대", count: 19317},
    {group: "40대", count: 19268},
    {group: "50대", count: 19080},
    {group: "60대 이상", count: 19146}
  ];

  // 관심사별 데이터
  const interestData = [
    {interest: "요리", users: 14179, clicks_per_user: "300.31", conversion_rate: "667.87", revenue_per_user: "839", roas: "1.15"},
    {interest: "패션", users: 14360, clicks_per_user: "299.49", conversion_rate: "671.73", revenue_per_user: "842", roas: "1.15"},
    {interest: "기술", users: 14355, clicks_per_user: "301.73", conversion_rate: "672.95", revenue_per_user: "840", roas: "1.15"},
    {interest: "여행", users: 14267, clicks_per_user: "299.96", conversion_rate: "668.82", revenue_per_user: "832", roas: "1.13"},
    {interest: "음악", users: 14207, clicks_per_user: "302.76", conversion_rate: "678.83", revenue_per_user: "844", roas: "1.15"},
    {interest: "영화", users: 14243, clicks_per_user: "297.60", conversion_rate: "668.09", revenue_per_user: "832", roas: "1.13"},
    {interest: "스포츠", users: 14389, clicks_per_user: "299.25", conversion_rate: "671.69", revenue_per_user: "836", roas: "1.14"}
  ];

  // 월별 데이터
  const monthlyData = [
    {month: "2024-02", campaigns: 5366, clicks: 1631912, spend: "3906383", revenue: "4588032", roas: "1.17"},
    {month: "2024-03", campaigns: 8426, clicks: 2515961, spend: "6184860", revenue: "6998217", roas: "1.13"},
    {month: "2024-04", campaigns: 8079, clicks: 2422461, spend: "5932992", revenue: "6754947", roas: "1.14"},
    {month: "2024-05", campaigns: 8582, clicks: 2561461, spend: "6313881", revenue: "7150691", roas: "1.13"},
    {month: "2024-06", campaigns: 8202, clicks: 2492828, spend: "5979915", revenue: "6969455", roas: "1.17"},
    {month: "2024-07", campaigns: 8326, clicks: 2481519, spend: "6125118", revenue: "6967772", roas: "1.14"},
    {month: "2024-08", campaigns: 8616, clicks: 2592827, spend: "6314512", revenue: "7236895", roas: "1.15"},
    {month: "2024-09", campaigns: 8124, clicks: 2431253, spend: "5968481", revenue: "6774874", roas: "1.14"},
    {month: "2024-10", campaigns: 8378, clicks: 2511451, spend: "6154540", revenue: "6975182", roas: "1.13"},
    {month: "2024-11", campaigns: 8277, clicks: 2489911, spend: "6072153", revenue: "7001809", roas: "1.15"},
    {month: "2024-12", campaigns: 8630, clicks: 2590228, spend: "6331852", revenue: "7195094", roas: "1.14"}
  ];

  // 총합 데이터
  const totalData = {
    impressions: 1000013032,
    clicks: 30015428,
    spend: 73350120,
    revenue: 83793653,
    ctr: "3.00",
    roas: "1.14"
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">GA 탐색리포트: 광고 성과 분석</h1>
          <p className="text-gray-600">100,000건의 광고 데이터 분석</p>
        </div>

        {/* KPI 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">총 노출 수</p>
            <p className="text-2xl font-bold mt-1">
              {totalData.impressions.toLocaleString()}
              <span className="text-sm font-normal text-gray-500 ml-1">회</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">총 클릭 수</p>
            <p className="text-2xl font-bold mt-1">
              {totalData.clicks.toLocaleString()}
              <span className="text-sm font-normal text-gray-500 ml-1">회</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">평균 CTR</p>
            <p className="text-2xl font-bold mt-1">
              {totalData.ctr}
              <span className="text-sm font-normal text-gray-500 ml-1">%</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">총 지출액</p>
            <p className="text-2xl font-bold mt-1">
              {totalData.spend.toLocaleString()}
              <span className="text-sm font-normal text-gray-500 ml-1">원</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">총 매출액</p>
            <p className="text-2xl font-bold mt-1">
              {totalData.revenue.toLocaleString()}
              <span className="text-sm font-normal text-gray-500 ml-1">원</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-500">ROAS</p>
            <p className="text-2xl font-bold mt-1">
              {totalData.roas}
              <span className="text-sm font-normal text-gray-500 ml-1">x</span>
            </p>
          </div>
        </div>
        
        {/* 채널별 성과 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">채널별 성과 분석</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">채널별 클릭 수</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={channelData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="channel" />
                    <Tooltip formatter={(value) => new Intl.NumberFormat('ko-KR').format(value)} />
                    <Legend />
                    <Bar dataKey="clicks" name="클릭 수" fill="#4285F4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">채널별 ROAS</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={channelData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="roas" name="ROAS (x)" fill="#34A853" />
                    <Bar dataKey="ctr" name="CTR (%)" fill="#FBBC05" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">채널 효율성 분석</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">채널</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">노출 수</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">클릭 수</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">CTR (%)</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">지출액 (원)</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">매출액 (원)</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS (x)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {channelData.map((channel, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{channel.channel}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{parseInt(channel.impressions).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{parseInt(channel.clicks).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{channel.ctr}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{parseInt(channel.spend).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{parseInt(channel.revenue).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{channel.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* 광고 형식별 성과 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">광고 형식별 성과 분석</h2>
          <div className="h-80 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={formatData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="format" />
                <YAxis />
                <Tooltip formatter={(value) => new Intl.NumberFormat('ko-KR').format(value)} />
                <Legend />
                <Bar dataKey="clicks" name="클릭 수" fill="#4285F4" />
                <Bar dataKey="revenue" name="매출액" fill="#34A853" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">광고 형식</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">CTR (%)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS (x)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {formatData.map((format, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{format.format}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{format.ctr}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{format.roas}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 사용자 분석 */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">사용자 분석</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4">연령대별 분포</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ageGroups}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="count"
                      nameKey="group"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {ageGroups.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">관심사별 사용자당 매출</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={interestData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="interest" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue_per_user" name="사용자당 매출" fill="#EA4335" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관심사</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">사용자 수</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">사용자당 클릭 수</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">전환율 (%)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">사용자당 매출 (원)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {interestData.map((interest, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{interest.interest}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{interest.users.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{interest.clicks_per_user}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{interest.conversion_rate}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{interest.revenue_per_user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* 추세 분석 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-6 text-gray-800">월별 캠페인 성과 추이</h2>
          <div className="h-80 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value) => new Intl.NumberFormat('ko-KR').format(value)} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="clicks" name="클릭 수" stroke="#4285F4" />
                <Line yAxisId="right" type="monotone" dataKey="roas" name="ROAS" stroke="#EA4335" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">월</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">캠페인 수</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">클릭 수</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">지출액 (원)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">매출액 (원)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS (x)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {monthlyData.map((month, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{month.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{month.campaigns.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{month.clicks.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{parseInt(month.spend).toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{parseInt(month.revenue).toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{month.roas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GAExplorationReport;
