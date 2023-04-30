import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";
import { useState } from "react";


export default function NewProduct() {
  return (
    <Layout>
        <label>New Product</label>
        <ProductForm/>
    </Layout>
    
  ) 
}