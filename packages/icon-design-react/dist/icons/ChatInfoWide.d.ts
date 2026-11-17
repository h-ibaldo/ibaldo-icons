import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoWide: ForwardRefExoticComponent<ChatInfoWideProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoWide;
export { ChatInfoWide };
