import React from 'react';
import { LayoutWrapper, ResponsiveLayoutStyle } from './ResponsiveLayout.css';
export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={LayoutWrapper}>
      <div className={ResponsiveLayoutStyle}>{children}</div>
    </div>
  );
}
