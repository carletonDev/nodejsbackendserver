=begin
AdventureWorksAPI

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: v1

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end


class Product < ApplicationRecord

  serialize :sales_order_detail, Array
end
