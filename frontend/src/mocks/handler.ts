import { http, HttpResponse } from 'msw';

const data = [
  {
    region_id: '1',
    region_name: '서울',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    region_id: '2',
    region_name: '부산',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    region_id: '3',
    region_name: '경주',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    region_id: '4',
    region_name: '포항',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    region_id: '5',
    region_name: '서울',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    region_id: '6',
    region_name: '부산',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    region_id: '7',
    region_name: '경주',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    region_id: '8',
    region_name: '포항',
    imgUrl:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fCVFRCU5NSU5QyVFQSVCNSVBRCUyMCVFQyU5NyVBQyVFRCU5NiU4OXxlbnwwfHwwfHx8MA%3D%3D',
  },
];

export const handlers = [
  http.get('http://localhost:5173/region', () => {
    return HttpResponse.json(data);
  }),
];
