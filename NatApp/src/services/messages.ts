export type Message = {
  id: string;
  postId: string;
  postTitle: string;
  body: string;
  createdAt: string;
};

// Mock data for now
let mockMessages: Message[] = [
  {
    id: '1',
    postId: 'p1',
    postTitle: 'Black leather wallet',
    body: 'I think I found this near the library on Tuesday.',
    createdAt: new Date().toISOString(),
  },
];

const wait = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// Replace later with backend

export async function sendMessage(postId: string, body: string): Promise<void> {
  await wait();
  mockMessages = [
    { id: String(Date.now()), postId, postTitle: 'Your post', body, createdAt: new Date().toISOString() },
    ...mockMessages,
  ];
}

export async function getInbox(): Promise<Message[]> {
  await wait();
  return mockMessages;
}