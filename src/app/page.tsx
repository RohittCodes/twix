'use client';

import Mindmap from '@/components/twix';
import React from 'react';

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <Mindmap isFullScreen={false} />
    </main>
  );
}
