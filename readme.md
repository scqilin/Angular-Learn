# Angular学习记录

## Angular权威指南

### 1 编写编写你的第一个应用

### 2  TypeScript

### 3 工作原理

### 4 内置命令
#### ngIf
```html
<div *ngIf="false"></div>
<div *ngIf="a>b"></div>
<div *ngIf="str === 'yes'"></div>
<div *ngIf="myFunc()"></div>
```
#### ngSwitch

#### ngStyle
```html
<div [style.background-color] = " 'yellow' "
<div [ngStyle] = "{ color: 'while' , 'background-color' : 'bule' }"></div>
```
#### ngClass
```html
<div [ngClass] = "{bordered:falses}"
```
#### ngFor
```html
*ngFor="let item of items"

索引：let idx = index
还有对应的first 、last、even偶数、odd奇数
```
#### ngNonBindable
```html
 <div ngNonBingdable>{{ content }}</div>
```

### 5 Angular中的的表单

### 6 HTTP

### 7 路由

### 8 依赖注入

### 9 Angular数据架构

### 10 使用可观察对象的数据架构：服务

### 11 使用可观察对象的数据架构：视图组件

### 12 基于TypeScript的Redux简介

### 13 在Angular中引入Redux

### 14 高级组件

### 15 测试

## 16 把AngularJS应用升级到Angular

# Angular开发实践


