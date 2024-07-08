using app.interactions from '../db/interactions';

service CatalogService {

    entity PLANTS             as projection on interactions.PLANTS;
    entity Employees          as projection on interactions.Employees;
    entity EmployeeExperience as projection on interactions.EmployeeExperience;
    entity Customers          as projection on interactions.Customers;
    entity CustomerPurchases  as projection on interactions.CustomerPurchases;
    entity MaterialManagement as projection on interactions.MaterialManagement;
    entity DEALERS            as projection on interactions.DEALERS;
    entity QUAN_INFO          as projection on interactions.QUAN_INFO;
}
