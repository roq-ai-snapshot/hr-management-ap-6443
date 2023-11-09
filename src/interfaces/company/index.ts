import { EmployeeInterface } from 'interfaces/employee';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { OwnerInterface } from 'interfaces/owner';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  industry?: string;
  size?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  employee?: EmployeeInterface[];
  hr_manager?: HrManagerInterface[];
  owner?: OwnerInterface[];

  _count?: {
    employee?: number;
    hr_manager?: number;
    owner?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  industry?: string;
  name?: string;
  tenant_id?: string;
}
