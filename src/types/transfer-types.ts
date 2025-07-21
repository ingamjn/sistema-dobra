export type Transfer = {
  id?: number;
  from_user: string;
  to_user: string;
  step: string;
  timestamp: string;
  amount: number;
  message?: string | null;
  sent_at?: string;
  verified_at?: string | null;
  received_at?: string | null;
};
