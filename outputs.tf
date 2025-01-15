output "vpc_id" {
  value = aws_vpc.chat_vpc.id
}

output "eks_cluster_name" {
  value = aws_eks_cluster.chat_eks.name
}

output "eks_cluster_endpoint" {
  value = aws_eks_cluster.chat_eks.endpoint
}

output "eks_node_role_arn" {
  value = aws_iam_role.eks_node_role.arn
}
