import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOffWide: ForwardRefExoticComponent<ChatOffWideProps & RefAttributes<SVGSVGElement>>;

export default ChatOffWide;
export { ChatOffWide };
