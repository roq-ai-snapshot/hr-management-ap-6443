import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  company_name: string;
  contact_name: string;
  contact_title?: string;
  address?: string;
  city?: string;
  region?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_name?: string;
  contact_name?: string;
  contact_title?: string;
  address?: string;
  city?: string;
  region?: string;
  user_id?: string;
}
