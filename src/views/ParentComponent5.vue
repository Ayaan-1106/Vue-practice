<template>
    <button type="button" @click="checkChild">자식 컴포넌트 조회</button>
    <child-component ref="child_component" />
</template>

<script>
import ChildComponent from './ChildComponent5.vue';
export default {
    components: {ChildComponent},
    computed: {
        msg(){
            return this.$refs.child_component.msg;
        }
    },
    methods: {
        checkChild() {
            alert(this.msg);
        }
    }
}
</script>