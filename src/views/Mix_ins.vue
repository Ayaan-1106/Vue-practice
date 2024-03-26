<template>
       <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,i) in productList" :key="i">
                <td>{{product.product_name}}</td>
                <td>{{product.price }}</td>
                <td>{{product.category }}</td>
                <td>{{product.delivery_price }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '../api.js';
export default {
    mixins: [ApiMixin],
    data() {
        return {
            productList: []
        };
    },
    async mounted() {
        this.productList = await this.$callAPI("https://d23cd6fe-385a-4642-8289-178098f13a41.mock.pstmn.io/list", "get");
        console.log(this.productList);
    }
}
</script>

<style>

</style>