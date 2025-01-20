# Angular18_CRUD_App_NET8_WebApi

- Tools
	-Visual Studio 2022

- Nuget Packages
	- Microsoft.EntityFrameworkCore
	- Microsoft.EntityFrameworkCore.SqlServer
	- Microsoft.EntityFrameworkCore.Tools
- Structure
	- Add Folder Models - Add class (Employee)
	- Add folder Data - Add AppDBContext - Create DBSet
-AppSettings
	- Connections
	- Program.cs - Add Connection - Services.AddDBContext
-Structure
	- Add folder Repository - Add class (EmployeeRepository) - Create async Tasks
- Controller
	- Create Employee Controller
	- Nuget Console:
		- Migration process:
			- Add-Migration 'Initial Setup'
			- Update-database
- cmd
	- code .
	- Terminal:
		-ng new employee-app
		- npm install Bootstrap
- VSCode
	- angular.json:
		- "styles": [
              		"src/styles.css",
              		"node_modules/bootstrap/dist/css/bootstrap.min.css"
           		]
	- Create a component:
		- ng g c Components/employee
	- Create a service:
		- ng g s Services/employee
	- Create an interface
		- ng g interface Models/Employee
	- Launch server
		- ng serve -o -> http://localhost:4200/
	- Design GUI
		- Services->app.component.html
			- <router-outlet>
	- Routes
		-app -> app.routes.ts
			- path: "", component: EmployeeComponent
			- path: "employee", component: EmployeeComponent
	- Components
		- app -> employee.component.html
	- Add Employee button functionality
		- Note: search in browser Bootstrap 5 modal w3schools (Open Windows with css)
	- employee.component.ts
		- imports: [ReactiveFormsModule]
  		- Add new FormGroup
		- set FormState
	- services
		- EmployeeService
			- apiUrl
			- inject http
		
	
