import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  MenuItems: any[];
  constructor(){
  	this.MenuItems = [
  		{
  			"id": 1,
  			"name": "Dashboard",
  			"url": "/dashboard",
  			"icon": "dashboard",
  			"children": []
  		},
  		{
  			"id": 2,
  			"name": "Masters",
  			"url": "",
  			"icon": "work",
  			"children": [
  				{
  					"name": "Supplier",
		  			"url": "/supplier",
		  			"icon": ""
  				},
  				{
  					"name": "Expense Entry",
		  			"url": "/expense_entry",
		  			"icon": ""
  				},
  				{
  					"name": "Expense Report",
		  			"url": "/expense_report",
		  			"icon": ""
  				},
  				{
  					"name": "Expense Main",
		  			"url": "/expense_main",
		  			"icon": ""
  				},
  				{
  					"name": "Expense Sub",
		  			"url": "/expense_sub",
		  			"icon": ""
  				},
  				{
  					"name": "Pharmacy Category",
		  			"url": "/pharmacy_category",
		  			"icon": ""
  				},
  				{
  					"name": "Pharmacy Item",
		  			"url": "/pharmacy_item",
		  			"icon": ""
  				},
  				{
  					"name": "Pharmacy Units Name",
		  			"url": "/pharmacy_units_name",
		  			"icon": ""
  				},
  				{
  					"name": "Pharmacy Package Name",
		  			"url": "/pharmacy_package_name",
		  			"icon": ""
  				},
  				{
  					"name": "Pharmacy Manufacturer Name",
		  			"url": "/pharmacy_manufacturer_name",
		  			"icon": ""
  				},
  				{
  					"name": "Tax Main",
		  			"url": "/tax_main",
		  			"icon": ""
  				},
  				{
  					"name": "Tax Sub",
		  			"url": "/tax_sub",
		  			"icon": ""
  				},
  				{
  					"name": "Bank",
		  			"url": "/bank",
		  			"icon": ""
  				},
  				{
  					"name": "Credit Card",
		  			"url": "/credit_card",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Ward",
		  			"url": "/hospital_ward",
		  			"icon": ""
  				}
  			]
  		},
  		{
  			"id": 3,
  			"name": "Hospital",
  			"url": "",
  			"icon": "account_balance",
  			"children": [
  				{
  					"name": "Hospital Bill Entry",
		  			"url": "/hospital_bill_entry",
		  			"icon": ""
  				},
  				{
  					"name": "Print Hospital Invoice",
		  			"url": "/print_hospital_invoice",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Invoice Report",
		  			"url": "/hospital_invoice_report",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Statement - By Patient",
		  			"url": "/hospital_statement_patient",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Statement - By Invoice",
		  			"url": "/hospital_statement_invoice",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Sales Report By Category",
		  			"url": "/hospital_sales_report_category",
		  			"icon": ""
  				},
  				{
  					"name": "Final Bill By Item",
		  			"url": "/final_bill_item",
		  			"icon": ""
  				},
  				{
  					"name": "Final Discount Bill By Item",
		  			"url": "/final_discount_bill_item",
		  			"icon": ""
  				},
  				{
  					"name": "Final Bill By Date",
		  			"url": "/final_bill_date",
		  			"icon": ""
  				},
  				{
  					"name": "Final Discount Bill By Date",
		  			"url": "/final_discount_bill_date",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Collection Entry",
		  			"url": "/hospital_collection_entry",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Collection Received",
		  			"url": "/hospital_collection_received",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Collection Pending",
		  			"url": "/hospital_collection_pending",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Advance Report",
		  			"url": "/hospital_advance_report",
		  			"icon": ""
  				},
  				{
  					"name": "Patient Discharge",
		  			"url": "/patient_discharge",
		  			"icon": ""
  				},
  				{
  					"name": "Discharge Summary Report",
		  			"url": "/discharge_summary_report",
		  			"icon": ""
  				},
  				{
  					"name": "Create Hospital Item",
		  			"url": "/create_hospital_item",
		  			"icon": ""
  				},
  				{
  					"name": "Create Hospital Category",
		  			"url": "/create_hospital_category",
		  			"icon": ""
  				},
  				{
  					"name": "Hospital Package Name",
		  			"url": "/hospital_package_name",
		  			"icon": ""
  				}
  			]
  		},
  		{
  			"id": 4,
  			"name": "Doctors",
  			"url": "",
  			"icon": "group_add",
  			"children": [
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				}
  			]
  		},
  		{
  			"id": 5,
  			"name": "Patients",
  			"url": "",
  			"icon": "accessible",
  			"children": [
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				},
  				{
  					"name": "Masters",
		  			"url": "/masters",
		  			"icon": ""
  				}
  			]
  		},
  		{
  			"id": 6,
  			"name": "Lab",
  			"url": "",
  			"icon": "assignment_turned_in",
  			"children": []
  		},
  		{
  			"id": 7,
  			"name": "Pharma In",
  			"url": "",
  			"icon": "add_shopping_cart",
  			"children": []
  		},
  		{
  			"id": 8,
  			"name": "Pharma Out",
  			"url": "",
  			"icon": "local_shipping",
  			"children": []
  		},
  		{
  			"id": 9,
  			"name": "Stock",
  			"url": "",
  			"icon": "store",
  			"children": []
  		},
  		{
  			"id": 10,
  			"name": "Settings",
  			"url": "",
  			"icon": "settings",
  			"children": []
  		},
  		{
  			"id": 11,
  			"name": "Utility",
  			"url": "",
  			"icon": "vpn_key",
  			"children": []
  		},
  	]
  }
}
